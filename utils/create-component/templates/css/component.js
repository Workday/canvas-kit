module.exports = name => `
@mixin wdc-${name}() {

}
.wdc-${name} {
  @include wdc-${name}();
}
`;
