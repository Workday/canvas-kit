#!/usr/bin/env groovy
@Library('design-ops-shared-library@stable') _

// Make sure to fill this out with the project name
setEnv.app('canvas-kit-react')
workspaceDir = env.WORKSPACEDIR
repoBaseDir = env.REPOBASEDIR

//
setEnv.node()
setEnv.ci()
setEnv.cdn('beta')

//AWS Profiles Required:
def awsProfileStorybook = "jenkinsprs"

timestamps {
  provisionPod(dockerImage: 'docker-dev-artifactory.workday.com/design/jenkins-slaves/node8-awscli', memReq: '8Gi', memLimit: '8Gi') {
    node(getNames()) {
      ifBranch.isMaster {
        properties ([
          disableConcurrentBuilds()
        ])
      }
      ws(workspaceDir) {

        stage('Code Checkout') {
          echo env.STAGE_NAME
          slack.notifyStart()
          echo 'Checking out repo'
          dir(repoBaseDir) {
            getGit.start()
            sh('git fetch --tags')
          }
        }

        ciSkip()
        if (env.CI_SKIP == "true") {
          slack.notifySuccess()
          initGheStatusChecks(['ci/jenkins/ciSkip'] as String[])
          setGheStatusChecks('ci/jenkins/ciSkip', 'ci Skipped.', 'SUCCESS')
          return
        } else {
          initGheStatusChecks(['ci/jenkins/ciProgress', 'ci/jenkins/tests', 'ci/jenkins/storybook', 'ci/jenkins/build'] as String[])
        }

        stage('Setup') {
          echo env.STAGE_NAME
          echo 'Setting up npm, installing aws cli'
          try {
            parallel(
                    npmrc: { setupNpmrc() },
                    awscli: {
                      ifBranch.isNotMaster {
                        awsProfile.init(
                                profile: awsProfileStorybook,
                        )
                      }
                    }
            )
          } catch (Exception e) {
            setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
            slack.notifyFail()
            throw e
          }
        }

        stage('Yarn Install') {
          echo env.STAGE_NAME
          dir(repoBaseDir) {
            try {
              sh('yarn install --production=false --frozen-lockfile')
            } catch (Exception e) {
              setGheStatusChecks('ci/jenkins/build', 'build FAILED!', 'FAIL')
							setGheStatusChecks('ci/jenkins/tests', 'tests were not run.', 'FAIL')
              setGheStatusChecks('ci/jenkins/storybook', 'Storybook FAILED!', 'FAIL')
              setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
              slack.notifyFail()
              throw e
            }
          }
        }

        stage('Yarn Build') {
          echo env.STAGE_NAME
          dir(repoBaseDir) {
            try {
              sh('yarn run build:rebuild --concurrency=2')
              setGheStatusChecks('ci/jenkins/build', 'build SUCCESS!', 'SUCCESS')
            } catch (Exception e) {
              setGheStatusChecks('ci/jenkins/build', 'build FAILED!', 'FAIL')
							setGheStatusChecks('ci/jenkins/tests', 'tests were not run.', 'FAIL')
              setGheStatusChecks('ci/jenkins/storybook', 'Storybook FAILED!', 'FAIL')
              setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
              slack.notifyFail()
              throw e
            }
          }
        }

        stage('Storybook') {
          echo env.STAGE_NAME
          dir(repoBaseDir) {
            try {
              sh('git rm -rf docs/')
              sh('yarn run build-storybook')
              ifBranch.isMaster {
                sh('git add docs')
                sh('git diff --quiet && git diff --staged --quiet || git commit -m "docs(storybook): Build Storybook [ci skip]"')
                setGheStatusChecks('ci/jenkins/storybook', 'Storybook SUCCESS!', 'SUCCESS')
              }
              ifBranch.isNotMaster {
                awsProfile.set(awsProfileStorybook)
                testPageUpload.prPage('docs') //give it a directory to upload
                setGheStatusChecks.withDetailsUrl('ci/jenkins/storybook', 'Click `Details` to view test page', 'SUCCESS', env.S3_PR_PAGE)
              }
            } catch (Exception e) {
              setGheStatusChecks('ci/jenkins/storybook', 'storybook FAILED!', 'FAIL')
              setGheStatusChecks('ci/jenkins/tests', 'tests not run.', 'FAIL')
              setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
              slack.notifyFail()
              throw e
            }
          }
        }

				stage('Test') {
					echo env.STAGE_NAME
					echo "Changing NODE_ENV to 'test' for this stage"
					env.NODE_ENV = "test"
					dir(repoBaseDir) {
						try {
							// https://jestjs.io/docs/en/troubleshooting#tests-are-extremely-slow-on-docker-and-or-continuous-integration-ci-server
							sh('yarn run test -w 4')
							// or do yarn run test -i
							setGheStatusChecks('ci/jenkins/tests', 'tests SUCCESS!', 'SUCCESS')
						} catch (Exception e) {
							setGheStatusChecks('ci/jenkins/tests', 'tests FAILED!', 'FAIL')
							setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
              slack.notifyFail()
							throw e
						}
						finally {
							junit 'junit.xml'
							step([
								$class              : 'CloverPublisher',
								cloverReportDir     : 'build/reports/jest',
								cloverReportFileName: 'clover.xml',
								healthyTarget       : [methodCoverage: 97, conditionalCoverage: 97, statementCoverage: 97],
								unhealthyTarget     : [methodCoverage: 90, conditionalCoverage: 90, statementCoverage: 90],
								failingTarget       : [methodCoverage: 80, conditionalCoverage: 80, statementCoverage: 80]
							])
						}
					}
					setEnv.node()
				}

        //Following stages occur only on master
        ifBranch.isMaster {

          stage('Release') {
            echo env.STAGE_NAME
            dir(repoBaseDir) {
              try {
                echo 'npm publish & uploading to s3'
                sh('yarn run lerna publish')
                sh('git push origin master') //Git Release
              } catch (Exception e) {
                // should have a fallback/unpublish/lerna "undo"
                setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress FAILED!', 'FAIL')
                slack.notifyFail()
                throw e
              }
            }
          }

        } // End of master stages

        stage('Cleanup') {
          echo env.STAGE_NAME
          setGheStatusChecks('ci/jenkins/ciProgress', 'ciProgress DONE!', 'SUCCESS')
          slack.notifySuccess()
          postCleanup()
        }

      }
    }
  }
  echo "RESULT: ${currentBuild.result}"
}
