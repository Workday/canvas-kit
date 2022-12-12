// This file is auto-generated from the createTraversals.ts file. Do not modify contents
import ts from 'typescript';

export const guards = {
  isNumericLiteral(node: ts.Node): node is ts.NumericLiteral {
    return node.kind === ts.SyntaxKind.NumericLiteral;
  },
  isBigIntLiteral(node: ts.Node): node is ts.BigIntLiteral {
    return node.kind === ts.SyntaxKind.BigIntLiteral;
  },
  isStringLiteral(node: ts.Node): node is ts.StringLiteral {
    return node.kind === ts.SyntaxKind.StringLiteral;
  },
  isJsxText(node: ts.Node): node is ts.JsxText {
    return node.kind === ts.SyntaxKind.JsxText;
  },
  isRegularExpressionLiteral(node: ts.Node): node is ts.RegularExpressionLiteral {
    return node.kind === ts.SyntaxKind.RegularExpressionLiteral;
  },
  isNoSubstitutionTemplateLiteral(node: ts.Node): node is ts.NoSubstitutionTemplateLiteral {
    return node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
  },
  isTemplateHead(node: ts.Node): node is ts.TemplateHead {
    return node.kind === ts.SyntaxKind.TemplateHead;
  },
  isTemplateMiddle(node: ts.Node): node is ts.TemplateMiddle {
    return node.kind === ts.SyntaxKind.TemplateMiddle;
  },
  isTemplateTail(node: ts.Node): node is ts.TemplateTail {
    return node.kind === ts.SyntaxKind.TemplateTail;
  },
  isIdentifier(node: ts.Node): node is ts.Identifier {
    return node.kind === ts.SyntaxKind.Identifier;
  },
  isPrivateIdentifier(node: ts.Node): node is ts.PrivateIdentifier {
    return node.kind === ts.SyntaxKind.PrivateIdentifier;
  },
  isFalseKeyword(node: ts.Node): node is ts.FalseLiteral {
    return node.kind === ts.SyntaxKind.FalseKeyword;
  },
  isImportKeyword(node: ts.Node): node is ts.ImportExpression {
    return node.kind === ts.SyntaxKind.ImportKeyword;
  },
  isNullKeyword(node: ts.Node): node is ts.NullLiteral {
    return node.kind === ts.SyntaxKind.NullKeyword;
  },
  isSuperKeyword(node: ts.Node): node is ts.SuperExpression {
    return node.kind === ts.SyntaxKind.SuperKeyword;
  },
  isThisKeyword(node: ts.Node): node is ts.ThisExpression {
    return node.kind === ts.SyntaxKind.ThisKeyword;
  },
  isTrueKeyword(node: ts.Node): node is ts.TrueLiteral {
    return node.kind === ts.SyntaxKind.TrueKeyword;
  },
  isQualifiedName(node: ts.Node): node is ts.QualifiedName {
    return node.kind === ts.SyntaxKind.QualifiedName;
  },
  isComputedPropertyName(node: ts.Node): node is ts.ComputedPropertyName {
    return node.kind === ts.SyntaxKind.ComputedPropertyName;
  },
  isTypeParameter(node: ts.Node): node is ts.TypeParameterDeclaration {
    return node.kind === ts.SyntaxKind.TypeParameter;
  },
  isParameter(node: ts.Node): node is ts.ParameterDeclaration {
    return node.kind === ts.SyntaxKind.Parameter;
  },
  isDecorator(node: ts.Node): node is ts.Decorator {
    return node.kind === ts.SyntaxKind.Decorator;
  },
  isPropertySignature(node: ts.Node): node is ts.PropertySignature {
    return node.kind === ts.SyntaxKind.PropertySignature;
  },
  isPropertyDeclaration(node: ts.Node): node is ts.PropertyDeclaration {
    return node.kind === ts.SyntaxKind.PropertyDeclaration;
  },
  isMethodSignature(node: ts.Node): node is ts.MethodSignature {
    return node.kind === ts.SyntaxKind.MethodSignature;
  },
  isMethodDeclaration(node: ts.Node): node is ts.MethodDeclaration {
    return node.kind === ts.SyntaxKind.MethodDeclaration;
  },
  isConstructor(node: ts.Node): node is ts.ConstructorDeclaration {
    return node.kind === ts.SyntaxKind.Constructor;
  },
  isGetAccessor(node: ts.Node): node is ts.GetAccessorDeclaration {
    return node.kind === ts.SyntaxKind.GetAccessor;
  },
  isSetAccessor(node: ts.Node): node is ts.SetAccessorDeclaration {
    return node.kind === ts.SyntaxKind.SetAccessor;
  },
  isCallSignature(node: ts.Node): node is ts.CallSignatureDeclaration {
    return node.kind === ts.SyntaxKind.CallSignature;
  },
  isConstructSignature(node: ts.Node): node is ts.ConstructSignatureDeclaration {
    return node.kind === ts.SyntaxKind.ConstructSignature;
  },
  isIndexSignature(node: ts.Node): node is ts.IndexSignatureDeclaration {
    return node.kind === ts.SyntaxKind.IndexSignature;
  },
  isTypePredicate(node: ts.Node): node is ts.TypePredicateNode {
    return node.kind === ts.SyntaxKind.TypePredicate;
  },
  isTypeReference(node: ts.Node): node is ts.TypeReferenceNode {
    return node.kind === ts.SyntaxKind.TypeReference;
  },
  isFunctionType(node: ts.Node): node is ts.FunctionOrConstructorTypeNodeBase {
    return node.kind === ts.SyntaxKind.FunctionType;
  },
  isConstructorType(node: ts.Node): node is ts.ConstructorTypeNode {
    return node.kind === ts.SyntaxKind.ConstructorType;
  },
  isTypeQuery(node: ts.Node): node is ts.TypeQueryNode {
    return node.kind === ts.SyntaxKind.TypeQuery;
  },
  isTypeLiteral(node: ts.Node): node is ts.TypeLiteralNode {
    return node.kind === ts.SyntaxKind.TypeLiteral;
  },
  isArrayType(node: ts.Node): node is ts.ArrayTypeNode {
    return node.kind === ts.SyntaxKind.ArrayType;
  },
  isTupleType(node: ts.Node): node is ts.TupleTypeNode {
    return node.kind === ts.SyntaxKind.TupleType;
  },
  isOptionalType(node: ts.Node): node is ts.OptionalTypeNode {
    return node.kind === ts.SyntaxKind.OptionalType;
  },
  isRestType(node: ts.Node): node is ts.RestTypeNode {
    return node.kind === ts.SyntaxKind.RestType;
  },
  isUnionType(node: ts.Node): node is ts.UnionTypeNode {
    return node.kind === ts.SyntaxKind.UnionType;
  },
  isIntersectionType(node: ts.Node): node is ts.IntersectionTypeNode {
    return node.kind === ts.SyntaxKind.IntersectionType;
  },
  isConditionalType(node: ts.Node): node is ts.ConditionalTypeNode {
    return node.kind === ts.SyntaxKind.ConditionalType;
  },
  isInferType(node: ts.Node): node is ts.InferTypeNode {
    return node.kind === ts.SyntaxKind.InferType;
  },
  isParenthesizedType(node: ts.Node): node is ts.ParenthesizedTypeNode {
    return node.kind === ts.SyntaxKind.ParenthesizedType;
  },
  isThisType(node: ts.Node): node is ts.ThisTypeNode {
    return node.kind === ts.SyntaxKind.ThisType;
  },
  isTypeOperator(node: ts.Node): node is ts.TypeOperatorNode {
    return node.kind === ts.SyntaxKind.TypeOperator;
  },
  isIndexedAccessType(node: ts.Node): node is ts.IndexedAccessTypeNode {
    return node.kind === ts.SyntaxKind.IndexedAccessType;
  },
  isMappedType(node: ts.Node): node is ts.MappedTypeNode {
    return node.kind === ts.SyntaxKind.MappedType;
  },
  isLiteralType(node: ts.Node): node is ts.LiteralTypeNode {
    return node.kind === ts.SyntaxKind.LiteralType;
  },
  isNamedTupleMember(node: ts.Node): node is ts.NamedTupleMember {
    return node.kind === ts.SyntaxKind.NamedTupleMember;
  },
  isTemplateLiteralType(node: ts.Node): node is ts.TemplateLiteralTypeNode {
    return node.kind === ts.SyntaxKind.TemplateLiteralType;
  },
  isTemplateLiteralTypeSpan(node: ts.Node): node is ts.TemplateLiteralTypeSpan {
    return node.kind === ts.SyntaxKind.TemplateLiteralTypeSpan;
  },
  isImportType(node: ts.Node): node is ts.ImportTypeNode {
    return node.kind === ts.SyntaxKind.ImportType;
  },
  isObjectBindingPattern(node: ts.Node): node is ts.ObjectBindingPattern {
    return node.kind === ts.SyntaxKind.ObjectBindingPattern;
  },
  isArrayBindingPattern(node: ts.Node): node is ts.ArrayBindingPattern {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern;
  },
  isBindingElement(node: ts.Node): node is ts.BindingElement {
    return node.kind === ts.SyntaxKind.BindingElement;
  },
  isArrayLiteralExpression(node: ts.Node): node is ts.ArrayLiteralExpression {
    return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
  },
  isObjectLiteralExpression(node: ts.Node): node is ts.ObjectLiteralExpression {
    return node.kind === ts.SyntaxKind.ObjectLiteralExpression;
  },
  isPropertyAccessExpression(node: ts.Node): node is ts.PropertyAccessExpression {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression;
  },
  isElementAccessExpression(node: ts.Node): node is ts.ElementAccessExpression {
    return node.kind === ts.SyntaxKind.ElementAccessExpression;
  },
  isCallExpression(node: ts.Node): node is ts.CallExpression {
    return node.kind === ts.SyntaxKind.CallExpression;
  },
  isNewExpression(node: ts.Node): node is ts.NewExpression {
    return node.kind === ts.SyntaxKind.NewExpression;
  },
  isTaggedTemplateExpression(node: ts.Node): node is ts.TaggedTemplateExpression {
    return node.kind === ts.SyntaxKind.TaggedTemplateExpression;
  },
  isTypeAssertionExpression(node: ts.Node): node is ts.TypeAssertion {
    return node.kind === ts.SyntaxKind.TypeAssertionExpression;
  },
  isParenthesizedExpression(node: ts.Node): node is ts.ParenthesizedExpression {
    return node.kind === ts.SyntaxKind.ParenthesizedExpression;
  },
  isFunctionExpression(node: ts.Node): node is ts.FunctionExpression {
    return node.kind === ts.SyntaxKind.FunctionExpression;
  },
  isArrowFunction(node: ts.Node): node is ts.ArrowFunction {
    return node.kind === ts.SyntaxKind.ArrowFunction;
  },
  isDeleteExpression(node: ts.Node): node is ts.DeleteExpression {
    return node.kind === ts.SyntaxKind.DeleteExpression;
  },
  isTypeOfExpression(node: ts.Node): node is ts.TypeOfExpression {
    return node.kind === ts.SyntaxKind.TypeOfExpression;
  },
  isVoidExpression(node: ts.Node): node is ts.VoidExpression {
    return node.kind === ts.SyntaxKind.VoidExpression;
  },
  isAwaitExpression(node: ts.Node): node is ts.AwaitExpression {
    return node.kind === ts.SyntaxKind.AwaitExpression;
  },
  isPrefixUnaryExpression(node: ts.Node): node is ts.PrefixUnaryExpression {
    return node.kind === ts.SyntaxKind.PrefixUnaryExpression;
  },
  isPostfixUnaryExpression(node: ts.Node): node is ts.PostfixUnaryExpression {
    return node.kind === ts.SyntaxKind.PostfixUnaryExpression;
  },
  isBinaryExpression(node: ts.Node): node is ts.BinaryExpression {
    return node.kind === ts.SyntaxKind.BinaryExpression;
  },
  isConditionalExpression(node: ts.Node): node is ts.ConditionalExpression {
    return node.kind === ts.SyntaxKind.ConditionalExpression;
  },
  isTemplateExpression(node: ts.Node): node is ts.TemplateExpression {
    return node.kind === ts.SyntaxKind.TemplateExpression;
  },
  isYieldExpression(node: ts.Node): node is ts.YieldExpression {
    return node.kind === ts.SyntaxKind.YieldExpression;
  },
  isSpreadElement(node: ts.Node): node is ts.SpreadElement {
    return node.kind === ts.SyntaxKind.SpreadElement;
  },
  isClassExpression(node: ts.Node): node is ts.ClassExpression {
    return node.kind === ts.SyntaxKind.ClassExpression;
  },
  isOmittedExpression(node: ts.Node): node is ts.OmittedExpression {
    return node.kind === ts.SyntaxKind.OmittedExpression;
  },
  isExpressionWithTypeArguments(node: ts.Node): node is ts.ExpressionWithTypeArguments {
    return node.kind === ts.SyntaxKind.ExpressionWithTypeArguments;
  },
  isAsExpression(node: ts.Node): node is ts.AsExpression {
    return node.kind === ts.SyntaxKind.AsExpression;
  },
  isNonNullExpression(node: ts.Node): node is ts.NonNullExpression {
    return node.kind === ts.SyntaxKind.NonNullExpression;
  },
  isMetaProperty(node: ts.Node): node is ts.MetaProperty {
    return node.kind === ts.SyntaxKind.MetaProperty;
  },
  isSyntheticExpression(node: ts.Node): node is ts.SyntheticExpression {
    return node.kind === ts.SyntaxKind.SyntheticExpression;
  },
  isTemplateSpan(node: ts.Node): node is ts.TemplateSpan {
    return node.kind === ts.SyntaxKind.TemplateSpan;
  },
  isSemicolonClassElement(node: ts.Node): node is ts.SemicolonClassElement {
    return node.kind === ts.SyntaxKind.SemicolonClassElement;
  },
  isBlock(node: ts.Node): node is ts.Block {
    return node.kind === ts.SyntaxKind.Block;
  },
  isEmptyStatement(node: ts.Node): node is ts.EmptyStatement {
    return node.kind === ts.SyntaxKind.EmptyStatement;
  },
  isVariableStatement(node: ts.Node): node is ts.VariableStatement {
    return node.kind === ts.SyntaxKind.VariableStatement;
  },
  isExpressionStatement(node: ts.Node): node is ts.ExpressionStatement {
    return node.kind === ts.SyntaxKind.ExpressionStatement;
  },
  isIfStatement(node: ts.Node): node is ts.IfStatement {
    return node.kind === ts.SyntaxKind.IfStatement;
  },
  isDoStatement(node: ts.Node): node is ts.DoStatement {
    return node.kind === ts.SyntaxKind.DoStatement;
  },
  isWhileStatement(node: ts.Node): node is ts.WhileStatement {
    return node.kind === ts.SyntaxKind.WhileStatement;
  },
  isForStatement(node: ts.Node): node is ts.ForStatement {
    return node.kind === ts.SyntaxKind.ForStatement;
  },
  isForInStatement(node: ts.Node): node is ts.ForInStatement {
    return node.kind === ts.SyntaxKind.ForInStatement;
  },
  isForOfStatement(node: ts.Node): node is ts.ForOfStatement {
    return node.kind === ts.SyntaxKind.ForOfStatement;
  },
  isContinueStatement(node: ts.Node): node is ts.ContinueStatement {
    return node.kind === ts.SyntaxKind.ContinueStatement;
  },
  isBreakStatement(node: ts.Node): node is ts.BreakStatement {
    return node.kind === ts.SyntaxKind.BreakStatement;
  },
  isReturnStatement(node: ts.Node): node is ts.ReturnStatement {
    return node.kind === ts.SyntaxKind.ReturnStatement;
  },
  isWithStatement(node: ts.Node): node is ts.WithStatement {
    return node.kind === ts.SyntaxKind.WithStatement;
  },
  isSwitchStatement(node: ts.Node): node is ts.SwitchStatement {
    return node.kind === ts.SyntaxKind.SwitchStatement;
  },
  isLabeledStatement(node: ts.Node): node is ts.LabeledStatement {
    return node.kind === ts.SyntaxKind.LabeledStatement;
  },
  isThrowStatement(node: ts.Node): node is ts.ThrowStatement {
    return node.kind === ts.SyntaxKind.ThrowStatement;
  },
  isTryStatement(node: ts.Node): node is ts.TryStatement {
    return node.kind === ts.SyntaxKind.TryStatement;
  },
  isDebuggerStatement(node: ts.Node): node is ts.DebuggerStatement {
    return node.kind === ts.SyntaxKind.DebuggerStatement;
  },
  isVariableDeclaration(node: ts.Node): node is ts.VariableDeclaration {
    return node.kind === ts.SyntaxKind.VariableDeclaration;
  },
  isVariableDeclarationList(node: ts.Node): node is ts.VariableDeclarationList {
    return node.kind === ts.SyntaxKind.VariableDeclarationList;
  },
  isFunctionDeclaration(node: ts.Node): node is ts.FunctionDeclaration {
    return node.kind === ts.SyntaxKind.FunctionDeclaration;
  },
  isClassDeclaration(node: ts.Node): node is ts.ClassLikeDeclarationBase {
    return node.kind === ts.SyntaxKind.ClassDeclaration;
  },
  isInterfaceDeclaration(node: ts.Node): node is ts.InterfaceDeclaration {
    return node.kind === ts.SyntaxKind.InterfaceDeclaration;
  },
  isTypeAliasDeclaration(node: ts.Node): node is ts.TypeAliasDeclaration {
    return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
  },
  isEnumDeclaration(node: ts.Node): node is ts.EnumDeclaration {
    return node.kind === ts.SyntaxKind.EnumDeclaration;
  },
  isModuleDeclaration(node: ts.Node): node is ts.ModuleDeclaration {
    return node.kind === ts.SyntaxKind.ModuleDeclaration;
  },
  isModuleBlock(node: ts.Node): node is ts.ModuleBlock {
    return node.kind === ts.SyntaxKind.ModuleBlock;
  },
  isCaseBlock(node: ts.Node): node is ts.CaseBlock {
    return node.kind === ts.SyntaxKind.CaseBlock;
  },
  isNamespaceExportDeclaration(node: ts.Node): node is ts.NamespaceExportDeclaration {
    return node.kind === ts.SyntaxKind.NamespaceExportDeclaration;
  },
  isImportEqualsDeclaration(node: ts.Node): node is ts.ImportEqualsDeclaration {
    return node.kind === ts.SyntaxKind.ImportEqualsDeclaration;
  },
  isImportDeclaration(node: ts.Node): node is ts.ImportDeclaration {
    return node.kind === ts.SyntaxKind.ImportDeclaration;
  },
  isImportClause(node: ts.Node): node is ts.ImportClause {
    return node.kind === ts.SyntaxKind.ImportClause;
  },
  isNamespaceImport(node: ts.Node): node is ts.NamespaceImport {
    return node.kind === ts.SyntaxKind.NamespaceImport;
  },
  isNamedImports(node: ts.Node): node is ts.NamedImports {
    return node.kind === ts.SyntaxKind.NamedImports;
  },
  isImportSpecifier(node: ts.Node): node is ts.ImportSpecifier {
    return node.kind === ts.SyntaxKind.ImportSpecifier;
  },
  isExportAssignment(node: ts.Node): node is ts.ExportAssignment {
    return node.kind === ts.SyntaxKind.ExportAssignment;
  },
  isExportDeclaration(node: ts.Node): node is ts.ExportDeclaration {
    return node.kind === ts.SyntaxKind.ExportDeclaration;
  },
  isNamedExports(node: ts.Node): node is ts.NamedExports {
    return node.kind === ts.SyntaxKind.NamedExports;
  },
  isNamespaceExport(node: ts.Node): node is ts.NamespaceExport {
    return node.kind === ts.SyntaxKind.NamespaceExport;
  },
  isExportSpecifier(node: ts.Node): node is ts.ExportSpecifier {
    return node.kind === ts.SyntaxKind.ExportSpecifier;
  },
  isMissingDeclaration(node: ts.Node): node is ts.MissingDeclaration {
    return node.kind === ts.SyntaxKind.MissingDeclaration;
  },
  isExternalModuleReference(node: ts.Node): node is ts.ExternalModuleReference {
    return node.kind === ts.SyntaxKind.ExternalModuleReference;
  },
  isJsxElement(node: ts.Node): node is ts.JsxElement {
    return node.kind === ts.SyntaxKind.JsxElement;
  },
  isJsxSelfClosingElement(node: ts.Node): node is ts.JsxSelfClosingElement {
    return node.kind === ts.SyntaxKind.JsxSelfClosingElement;
  },
  isJsxOpeningElement(node: ts.Node): node is ts.JsxOpeningElement {
    return node.kind === ts.SyntaxKind.JsxOpeningElement;
  },
  isJsxClosingElement(node: ts.Node): node is ts.JsxClosingElement {
    return node.kind === ts.SyntaxKind.JsxClosingElement;
  },
  isJsxFragment(node: ts.Node): node is ts.JsxFragment {
    return node.kind === ts.SyntaxKind.JsxFragment;
  },
  isJsxOpeningFragment(node: ts.Node): node is ts.JsxOpeningFragment {
    return node.kind === ts.SyntaxKind.JsxOpeningFragment;
  },
  isJsxClosingFragment(node: ts.Node): node is ts.JsxClosingFragment {
    return node.kind === ts.SyntaxKind.JsxClosingFragment;
  },
  isJsxAttribute(node: ts.Node): node is ts.JsxAttributes {
    return node.kind === ts.SyntaxKind.JsxAttribute;
  },
  isJsxAttributes(node: ts.Node): node is ts.JsxAttributes {
    return node.kind === ts.SyntaxKind.JsxAttributes;
  },
  isJsxSpreadAttribute(node: ts.Node): node is ts.JsxSpreadAttribute {
    return node.kind === ts.SyntaxKind.JsxSpreadAttribute;
  },
  isJsxExpression(node: ts.Node): node is ts.JsxExpression {
    return node.kind === ts.SyntaxKind.JsxExpression;
  },
  isCaseClause(node: ts.Node): node is ts.CaseClause {
    return node.kind === ts.SyntaxKind.CaseClause;
  },
  isDefaultClause(node: ts.Node): node is ts.DefaultClause {
    return node.kind === ts.SyntaxKind.DefaultClause;
  },
  isHeritageClause(node: ts.Node): node is ts.HeritageClause {
    return node.kind === ts.SyntaxKind.HeritageClause;
  },
  isCatchClause(node: ts.Node): node is ts.CatchClause {
    return node.kind === ts.SyntaxKind.CatchClause;
  },
  isPropertyAssignment(node: ts.Node): node is ts.PropertyAssignment {
    return node.kind === ts.SyntaxKind.PropertyAssignment;
  },
  isShorthandPropertyAssignment(node: ts.Node): node is ts.ShorthandPropertyAssignment {
    return node.kind === ts.SyntaxKind.ShorthandPropertyAssignment;
  },
  isSpreadAssignment(node: ts.Node): node is ts.SpreadAssignment {
    return node.kind === ts.SyntaxKind.SpreadAssignment;
  },
  isEnumMember(node: ts.Node): node is ts.EnumMember {
    return node.kind === ts.SyntaxKind.EnumMember;
  },
  isUnparsedPrologue(node: ts.Node): node is ts.UnparsedPrologue {
    return node.kind === ts.SyntaxKind.UnparsedPrologue;
  },
  isUnparsedPrepend(node: ts.Node): node is ts.UnparsedPrepend {
    return node.kind === ts.SyntaxKind.UnparsedPrepend;
  },
  isUnparsedText(node: ts.Node): node is ts.UnparsedTextLike {
    return node.kind === ts.SyntaxKind.UnparsedText;
  },
  isUnparsedSyntheticReference(node: ts.Node): node is ts.UnparsedSyntheticReference {
    return node.kind === ts.SyntaxKind.UnparsedSyntheticReference;
  },
  isSourceFile(node: ts.Node): node is ts.SourceFile {
    return node.kind === ts.SyntaxKind.SourceFile;
  },
  isBundle(node: ts.Node): node is ts.Bundle {
    return node.kind === ts.SyntaxKind.Bundle;
  },
  isUnparsedSource(node: ts.Node): node is ts.UnparsedSource {
    return node.kind === ts.SyntaxKind.UnparsedSource;
  },
  isInputFiles(node: ts.Node): node is ts.InputFiles {
    return node.kind === ts.SyntaxKind.InputFiles;
  },
  isJSDocTypeExpression(node: ts.Node): node is ts.JSDocTypeExpression {
    return node.kind === ts.SyntaxKind.JSDocTypeExpression;
  },
  isJSDocNameReference(node: ts.Node): node is ts.JSDocNameReference {
    return node.kind === ts.SyntaxKind.JSDocNameReference;
  },
  isJSDocAllType(node: ts.Node): node is ts.JSDocAllType {
    return node.kind === ts.SyntaxKind.JSDocAllType;
  },
  isJSDocUnknownType(node: ts.Node): node is ts.JSDocUnknownType {
    return node.kind === ts.SyntaxKind.JSDocUnknownType;
  },
  isJSDocNullableType(node: ts.Node): node is ts.JSDocNullableType {
    return node.kind === ts.SyntaxKind.JSDocNullableType;
  },
  isJSDocNonNullableType(node: ts.Node): node is ts.JSDocNonNullableType {
    return node.kind === ts.SyntaxKind.JSDocNonNullableType;
  },
  isJSDocOptionalType(node: ts.Node): node is ts.JSDocOptionalType {
    return node.kind === ts.SyntaxKind.JSDocOptionalType;
  },
  isJSDocFunctionType(node: ts.Node): node is ts.JSDocFunctionType {
    return node.kind === ts.SyntaxKind.JSDocFunctionType;
  },
  isJSDocVariadicType(node: ts.Node): node is ts.JSDocVariadicType {
    return node.kind === ts.SyntaxKind.JSDocVariadicType;
  },
  isJSDocNamepathType(node: ts.Node): node is ts.JSDocNamepathType {
    return node.kind === ts.SyntaxKind.JSDocNamepathType;
  },
  isJSDocComment(node: ts.Node): node is ts.JSDoc {
    return node.kind === ts.SyntaxKind.JSDocComment;
  },
  isJSDocTypeLiteral(node: ts.Node): node is ts.JSDocTypeLiteral {
    return node.kind === ts.SyntaxKind.JSDocTypeLiteral;
  },
  isJSDocSignature(node: ts.Node): node is ts.JSDocSignature {
    return node.kind === ts.SyntaxKind.JSDocSignature;
  },
  isJSDocTag(node: ts.Node): node is ts.JSDocUnknownTag {
    return node.kind === ts.SyntaxKind.JSDocTag;
  },
  isJSDocAugmentsTag(node: ts.Node): node is ts.JSDocAugmentsTag {
    return node.kind === ts.SyntaxKind.JSDocAugmentsTag;
  },
  isJSDocImplementsTag(node: ts.Node): node is ts.JSDocImplementsTag {
    return node.kind === ts.SyntaxKind.JSDocImplementsTag;
  },
  isJSDocAuthorTag(node: ts.Node): node is ts.JSDocAuthorTag {
    return node.kind === ts.SyntaxKind.JSDocAuthorTag;
  },
  isJSDocDeprecatedTag(node: ts.Node): node is ts.JSDocDeprecatedTag {
    return node.kind === ts.SyntaxKind.JSDocDeprecatedTag;
  },
  isJSDocClassTag(node: ts.Node): node is ts.JSDocClassTag {
    return node.kind === ts.SyntaxKind.JSDocClassTag;
  },
  isJSDocPublicTag(node: ts.Node): node is ts.JSDocPublicTag {
    return node.kind === ts.SyntaxKind.JSDocPublicTag;
  },
  isJSDocPrivateTag(node: ts.Node): node is ts.JSDocPrivateTag {
    return node.kind === ts.SyntaxKind.JSDocPrivateTag;
  },
  isJSDocProtectedTag(node: ts.Node): node is ts.JSDocProtectedTag {
    return node.kind === ts.SyntaxKind.JSDocProtectedTag;
  },
  isJSDocReadonlyTag(node: ts.Node): node is ts.JSDocReadonlyTag {
    return node.kind === ts.SyntaxKind.JSDocReadonlyTag;
  },
  isJSDocCallbackTag(node: ts.Node): node is ts.JSDocCallbackTag {
    return node.kind === ts.SyntaxKind.JSDocCallbackTag;
  },
  isJSDocEnumTag(node: ts.Node): node is ts.JSDocEnumTag {
    return node.kind === ts.SyntaxKind.JSDocEnumTag;
  },
  isJSDocParameterTag(node: ts.Node): node is ts.JSDocParameterTag {
    return node.kind === ts.SyntaxKind.JSDocParameterTag;
  },
  isJSDocReturnTag(node: ts.Node): node is ts.JSDocReturnTag {
    return node.kind === ts.SyntaxKind.JSDocReturnTag;
  },
  isJSDocThisTag(node: ts.Node): node is ts.JSDocThisTag {
    return node.kind === ts.SyntaxKind.JSDocThisTag;
  },
  isJSDocTypeTag(node: ts.Node): node is ts.JSDocTypeTag {
    return node.kind === ts.SyntaxKind.JSDocTypeTag;
  },
  isJSDocTemplateTag(node: ts.Node): node is ts.JSDocTemplateTag {
    return node.kind === ts.SyntaxKind.JSDocTemplateTag;
  },
  isJSDocTypedefTag(node: ts.Node): node is ts.JSDocTypedefTag {
    return node.kind === ts.SyntaxKind.JSDocTypedefTag;
  },
  isJSDocSeeTag(node: ts.Node): node is ts.JSDocSeeTag {
    return node.kind === ts.SyntaxKind.JSDocSeeTag;
  },
  isJSDocPropertyTag(node: ts.Node): node is ts.JSDocPropertyTag {
    return node.kind === ts.SyntaxKind.JSDocPropertyTag;
  },
  isSyntaxList(node: ts.Node): node is ts.SyntaxList {
    return node.kind === ts.SyntaxKind.SyntaxList;
  },
  isNotEmittedStatement(node: ts.Node): node is ts.NotEmittedStatement {
    return node.kind === ts.SyntaxKind.NotEmittedStatement;
  },
  isPartiallyEmittedExpression(node: ts.Node): node is ts.PartiallyEmittedExpression {
    return node.kind === ts.SyntaxKind.PartiallyEmittedExpression;
  },
  isCommaListExpression(node: ts.Node): node is ts.CommaListExpression {
    return node.kind === ts.SyntaxKind.CommaListExpression;
  },
};

export const kindsMap = {
  NumericLiteral: ({} as any) as ts.NumericLiteral,
  BigIntLiteral: ({} as any) as ts.BigIntLiteral,
  StringLiteral: ({} as any) as ts.StringLiteral,
  JsxText: ({} as any) as ts.JsxText,
  RegularExpressionLiteral: ({} as any) as ts.RegularExpressionLiteral,
  NoSubstitutionTemplateLiteral: ({} as any) as ts.NoSubstitutionTemplateLiteral,
  TemplateHead: ({} as any) as ts.TemplateHead,
  TemplateMiddle: ({} as any) as ts.TemplateMiddle,
  TemplateTail: ({} as any) as ts.TemplateTail,
  Identifier: ({} as any) as ts.Identifier,
  PrivateIdentifier: ({} as any) as ts.PrivateIdentifier,
  FalseKeyword: ({} as any) as ts.FalseLiteral,
  ImportKeyword: ({} as any) as ts.ImportExpression,
  NullKeyword: ({} as any) as ts.NullLiteral,
  SuperKeyword: ({} as any) as ts.SuperExpression,
  ThisKeyword: ({} as any) as ts.ThisExpression,
  TrueKeyword: ({} as any) as ts.TrueLiteral,
  QualifiedName: ({} as any) as ts.QualifiedName,
  ComputedPropertyName: ({} as any) as ts.ComputedPropertyName,
  TypeParameter: ({} as any) as ts.TypeParameterDeclaration,
  Parameter: ({} as any) as ts.ParameterDeclaration,
  Decorator: ({} as any) as ts.Decorator,
  PropertySignature: ({} as any) as ts.PropertySignature,
  PropertyDeclaration: ({} as any) as ts.PropertyDeclaration,
  MethodSignature: ({} as any) as ts.MethodSignature,
  MethodDeclaration: ({} as any) as ts.MethodDeclaration,
  Constructor: ({} as any) as ts.ConstructorDeclaration,
  GetAccessor: ({} as any) as ts.GetAccessorDeclaration,
  SetAccessor: ({} as any) as ts.SetAccessorDeclaration,
  CallSignature: ({} as any) as ts.CallSignatureDeclaration,
  ConstructSignature: ({} as any) as ts.ConstructSignatureDeclaration,
  IndexSignature: ({} as any) as ts.IndexSignatureDeclaration,
  TypePredicate: ({} as any) as ts.TypePredicateNode,
  TypeReference: ({} as any) as ts.TypeReferenceNode,
  FunctionType: ({} as any) as ts.FunctionOrConstructorTypeNodeBase,
  ConstructorType: ({} as any) as ts.ConstructorTypeNode,
  TypeQuery: ({} as any) as ts.TypeQueryNode,
  TypeLiteral: ({} as any) as ts.TypeLiteralNode,
  ArrayType: ({} as any) as ts.ArrayTypeNode,
  TupleType: ({} as any) as ts.TupleTypeNode,
  OptionalType: ({} as any) as ts.OptionalTypeNode,
  RestType: ({} as any) as ts.RestTypeNode,
  UnionType: ({} as any) as ts.UnionTypeNode,
  IntersectionType: ({} as any) as ts.IntersectionTypeNode,
  ConditionalType: ({} as any) as ts.ConditionalTypeNode,
  InferType: ({} as any) as ts.InferTypeNode,
  ParenthesizedType: ({} as any) as ts.ParenthesizedTypeNode,
  ThisType: ({} as any) as ts.ThisTypeNode,
  TypeOperator: ({} as any) as ts.TypeOperatorNode,
  IndexedAccessType: ({} as any) as ts.IndexedAccessTypeNode,
  MappedType: ({} as any) as ts.MappedTypeNode,
  LiteralType: ({} as any) as ts.LiteralTypeNode,
  NamedTupleMember: ({} as any) as ts.NamedTupleMember,
  TemplateLiteralType: ({} as any) as ts.TemplateLiteralTypeNode,
  TemplateLiteralTypeSpan: ({} as any) as ts.TemplateLiteralTypeSpan,
  ImportType: ({} as any) as ts.ImportTypeNode,
  ObjectBindingPattern: ({} as any) as ts.ObjectBindingPattern,
  ArrayBindingPattern: ({} as any) as ts.ArrayBindingPattern,
  BindingElement: ({} as any) as ts.BindingElement,
  ArrayLiteralExpression: ({} as any) as ts.ArrayLiteralExpression,
  ObjectLiteralExpression: ({} as any) as ts.ObjectLiteralExpression,
  PropertyAccessExpression: ({} as any) as ts.PropertyAccessExpression,
  ElementAccessExpression: ({} as any) as ts.ElementAccessExpression,
  CallExpression: ({} as any) as ts.CallExpression,
  NewExpression: ({} as any) as ts.NewExpression,
  TaggedTemplateExpression: ({} as any) as ts.TaggedTemplateExpression,
  TypeAssertionExpression: ({} as any) as ts.TypeAssertion,
  ParenthesizedExpression: ({} as any) as ts.ParenthesizedExpression,
  FunctionExpression: ({} as any) as ts.FunctionExpression,
  ArrowFunction: ({} as any) as ts.ArrowFunction,
  DeleteExpression: ({} as any) as ts.DeleteExpression,
  TypeOfExpression: ({} as any) as ts.TypeOfExpression,
  VoidExpression: ({} as any) as ts.VoidExpression,
  AwaitExpression: ({} as any) as ts.AwaitExpression,
  PrefixUnaryExpression: ({} as any) as ts.PrefixUnaryExpression,
  PostfixUnaryExpression: ({} as any) as ts.PostfixUnaryExpression,
  BinaryExpression: ({} as any) as ts.BinaryExpression,
  ConditionalExpression: ({} as any) as ts.ConditionalExpression,
  TemplateExpression: ({} as any) as ts.TemplateExpression,
  YieldExpression: ({} as any) as ts.YieldExpression,
  SpreadElement: ({} as any) as ts.SpreadElement,
  ClassExpression: ({} as any) as ts.ClassExpression,
  OmittedExpression: ({} as any) as ts.OmittedExpression,
  ExpressionWithTypeArguments: ({} as any) as ts.ExpressionWithTypeArguments,
  AsExpression: ({} as any) as ts.AsExpression,
  NonNullExpression: ({} as any) as ts.NonNullExpression,
  MetaProperty: ({} as any) as ts.MetaProperty,
  SyntheticExpression: ({} as any) as ts.SyntheticExpression,
  TemplateSpan: ({} as any) as ts.TemplateSpan,
  SemicolonClassElement: ({} as any) as ts.SemicolonClassElement,
  Block: ({} as any) as ts.Block,
  EmptyStatement: ({} as any) as ts.EmptyStatement,
  VariableStatement: ({} as any) as ts.VariableStatement,
  ExpressionStatement: ({} as any) as ts.ExpressionStatement,
  IfStatement: ({} as any) as ts.IfStatement,
  DoStatement: ({} as any) as ts.DoStatement,
  WhileStatement: ({} as any) as ts.WhileStatement,
  ForStatement: ({} as any) as ts.ForStatement,
  ForInStatement: ({} as any) as ts.ForInStatement,
  ForOfStatement: ({} as any) as ts.ForOfStatement,
  ContinueStatement: ({} as any) as ts.ContinueStatement,
  BreakStatement: ({} as any) as ts.BreakStatement,
  ReturnStatement: ({} as any) as ts.ReturnStatement,
  WithStatement: ({} as any) as ts.WithStatement,
  SwitchStatement: ({} as any) as ts.SwitchStatement,
  LabeledStatement: ({} as any) as ts.LabeledStatement,
  ThrowStatement: ({} as any) as ts.ThrowStatement,
  TryStatement: ({} as any) as ts.TryStatement,
  DebuggerStatement: ({} as any) as ts.DebuggerStatement,
  VariableDeclaration: ({} as any) as ts.VariableDeclaration,
  VariableDeclarationList: ({} as any) as ts.VariableDeclarationList,
  FunctionDeclaration: ({} as any) as ts.FunctionDeclaration,
  ClassDeclaration: ({} as any) as ts.ClassLikeDeclarationBase,
  InterfaceDeclaration: ({} as any) as ts.InterfaceDeclaration,
  TypeAliasDeclaration: ({} as any) as ts.TypeAliasDeclaration,
  EnumDeclaration: ({} as any) as ts.EnumDeclaration,
  ModuleDeclaration: ({} as any) as ts.ModuleDeclaration,
  ModuleBlock: ({} as any) as ts.ModuleBlock,
  CaseBlock: ({} as any) as ts.CaseBlock,
  NamespaceExportDeclaration: ({} as any) as ts.NamespaceExportDeclaration,
  ImportEqualsDeclaration: ({} as any) as ts.ImportEqualsDeclaration,
  ImportDeclaration: ({} as any) as ts.ImportDeclaration,
  ImportClause: ({} as any) as ts.ImportClause,
  NamespaceImport: ({} as any) as ts.NamespaceImport,
  NamedImports: ({} as any) as ts.NamedImports,
  ImportSpecifier: ({} as any) as ts.ImportSpecifier,
  ExportAssignment: ({} as any) as ts.ExportAssignment,
  ExportDeclaration: ({} as any) as ts.ExportDeclaration,
  NamedExports: ({} as any) as ts.NamedExports,
  NamespaceExport: ({} as any) as ts.NamespaceExport,
  ExportSpecifier: ({} as any) as ts.ExportSpecifier,
  MissingDeclaration: ({} as any) as ts.MissingDeclaration,
  ExternalModuleReference: ({} as any) as ts.ExternalModuleReference,
  JsxElement: ({} as any) as ts.JsxElement,
  JsxSelfClosingElement: ({} as any) as ts.JsxSelfClosingElement,
  JsxOpeningElement: ({} as any) as ts.JsxOpeningElement,
  JsxClosingElement: ({} as any) as ts.JsxClosingElement,
  JsxFragment: ({} as any) as ts.JsxFragment,
  JsxOpeningFragment: ({} as any) as ts.JsxOpeningFragment,
  JsxClosingFragment: ({} as any) as ts.JsxClosingFragment,
  JsxAttribute: ({} as any) as ts.JsxAttributes,
  JsxAttributes: ({} as any) as ts.JsxAttributes,
  JsxSpreadAttribute: ({} as any) as ts.JsxSpreadAttribute,
  JsxExpression: ({} as any) as ts.JsxExpression,
  CaseClause: ({} as any) as ts.CaseClause,
  DefaultClause: ({} as any) as ts.DefaultClause,
  HeritageClause: ({} as any) as ts.HeritageClause,
  CatchClause: ({} as any) as ts.CatchClause,
  PropertyAssignment: ({} as any) as ts.PropertyAssignment,
  ShorthandPropertyAssignment: ({} as any) as ts.ShorthandPropertyAssignment,
  SpreadAssignment: ({} as any) as ts.SpreadAssignment,
  EnumMember: ({} as any) as ts.EnumMember,
  UnparsedPrologue: ({} as any) as ts.UnparsedPrologue,
  UnparsedPrepend: ({} as any) as ts.UnparsedPrepend,
  UnparsedText: ({} as any) as ts.UnparsedTextLike,
  UnparsedSyntheticReference: ({} as any) as ts.UnparsedSyntheticReference,
  SourceFile: ({} as any) as ts.SourceFile,
  Bundle: ({} as any) as ts.Bundle,
  UnparsedSource: ({} as any) as ts.UnparsedSource,
  InputFiles: ({} as any) as ts.InputFiles,
  JSDocTypeExpression: ({} as any) as ts.JSDocTypeExpression,
  JSDocNameReference: ({} as any) as ts.JSDocNameReference,
  JSDocAllType: ({} as any) as ts.JSDocAllType,
  JSDocUnknownType: ({} as any) as ts.JSDocUnknownType,
  JSDocNullableType: ({} as any) as ts.JSDocNullableType,
  JSDocNonNullableType: ({} as any) as ts.JSDocNonNullableType,
  JSDocOptionalType: ({} as any) as ts.JSDocOptionalType,
  JSDocFunctionType: ({} as any) as ts.JSDocFunctionType,
  JSDocVariadicType: ({} as any) as ts.JSDocVariadicType,
  JSDocNamepathType: ({} as any) as ts.JSDocNamepathType,
  JSDocComment: ({} as any) as ts.JSDoc,
  JSDocTypeLiteral: ({} as any) as ts.JSDocTypeLiteral,
  JSDocSignature: ({} as any) as ts.JSDocSignature,
  JSDocTag: ({} as any) as ts.JSDocUnknownTag,
  JSDocAugmentsTag: ({} as any) as ts.JSDocAugmentsTag,
  JSDocImplementsTag: ({} as any) as ts.JSDocImplementsTag,
  JSDocAuthorTag: ({} as any) as ts.JSDocAuthorTag,
  JSDocDeprecatedTag: ({} as any) as ts.JSDocDeprecatedTag,
  JSDocClassTag: ({} as any) as ts.JSDocClassTag,
  JSDocPublicTag: ({} as any) as ts.JSDocPublicTag,
  JSDocPrivateTag: ({} as any) as ts.JSDocPrivateTag,
  JSDocProtectedTag: ({} as any) as ts.JSDocProtectedTag,
  JSDocReadonlyTag: ({} as any) as ts.JSDocReadonlyTag,
  JSDocCallbackTag: ({} as any) as ts.JSDocCallbackTag,
  JSDocEnumTag: ({} as any) as ts.JSDocEnumTag,
  JSDocParameterTag: ({} as any) as ts.JSDocParameterTag,
  JSDocReturnTag: ({} as any) as ts.JSDocReturnTag,
  JSDocThisTag: ({} as any) as ts.JSDocThisTag,
  JSDocTypeTag: ({} as any) as ts.JSDocTypeTag,
  JSDocTemplateTag: ({} as any) as ts.JSDocTemplateTag,
  JSDocTypedefTag: ({} as any) as ts.JSDocTypedefTag,
  JSDocSeeTag: ({} as any) as ts.JSDocSeeTag,
  JSDocPropertyTag: ({} as any) as ts.JSDocPropertyTag,
  SyntaxList: ({} as any) as ts.SyntaxList,
  NotEmittedStatement: ({} as any) as ts.NotEmittedStatement,
  PartiallyEmittedExpression: ({} as any) as ts.PartiallyEmittedExpression,
  CommaListExpression: ({} as any) as ts.CommaListExpression,
};

const kindToString = {
  [ts.SyntaxKind.NumericLiteral]: 'NumericLiteral',
  [ts.SyntaxKind.BigIntLiteral]: 'BigIntLiteral',
  [ts.SyntaxKind.StringLiteral]: 'StringLiteral',
  [ts.SyntaxKind.JsxText]: 'JsxText',
  [ts.SyntaxKind.RegularExpressionLiteral]: 'RegularExpressionLiteral',
  [ts.SyntaxKind.NoSubstitutionTemplateLiteral]: 'NoSubstitutionTemplateLiteral',
  [ts.SyntaxKind.TemplateHead]: 'TemplateHead',
  [ts.SyntaxKind.TemplateMiddle]: 'TemplateMiddle',
  [ts.SyntaxKind.TemplateTail]: 'TemplateTail',
  [ts.SyntaxKind.Identifier]: 'Identifier',
  [ts.SyntaxKind.PrivateIdentifier]: 'PrivateIdentifier',
  [ts.SyntaxKind.FalseKeyword]: 'FalseKeyword',
  [ts.SyntaxKind.ImportKeyword]: 'ImportKeyword',
  [ts.SyntaxKind.NullKeyword]: 'NullKeyword',
  [ts.SyntaxKind.SuperKeyword]: 'SuperKeyword',
  [ts.SyntaxKind.ThisKeyword]: 'ThisKeyword',
  [ts.SyntaxKind.TrueKeyword]: 'TrueKeyword',
  [ts.SyntaxKind.QualifiedName]: 'QualifiedName',
  [ts.SyntaxKind.ComputedPropertyName]: 'ComputedPropertyName',
  [ts.SyntaxKind.TypeParameter]: 'TypeParameter',
  [ts.SyntaxKind.Parameter]: 'Parameter',
  [ts.SyntaxKind.Decorator]: 'Decorator',
  [ts.SyntaxKind.PropertySignature]: 'PropertySignature',
  [ts.SyntaxKind.PropertyDeclaration]: 'PropertyDeclaration',
  [ts.SyntaxKind.MethodSignature]: 'MethodSignature',
  [ts.SyntaxKind.MethodDeclaration]: 'MethodDeclaration',
  [ts.SyntaxKind.Constructor]: 'Constructor',
  [ts.SyntaxKind.GetAccessor]: 'GetAccessor',
  [ts.SyntaxKind.SetAccessor]: 'SetAccessor',
  [ts.SyntaxKind.CallSignature]: 'CallSignature',
  [ts.SyntaxKind.ConstructSignature]: 'ConstructSignature',
  [ts.SyntaxKind.IndexSignature]: 'IndexSignature',
  [ts.SyntaxKind.TypePredicate]: 'TypePredicate',
  [ts.SyntaxKind.TypeReference]: 'TypeReference',
  [ts.SyntaxKind.FunctionType]: 'FunctionType',
  [ts.SyntaxKind.ConstructorType]: 'ConstructorType',
  [ts.SyntaxKind.TypeQuery]: 'TypeQuery',
  [ts.SyntaxKind.TypeLiteral]: 'TypeLiteral',
  [ts.SyntaxKind.ArrayType]: 'ArrayType',
  [ts.SyntaxKind.TupleType]: 'TupleType',
  [ts.SyntaxKind.OptionalType]: 'OptionalType',
  [ts.SyntaxKind.RestType]: 'RestType',
  [ts.SyntaxKind.UnionType]: 'UnionType',
  [ts.SyntaxKind.IntersectionType]: 'IntersectionType',
  [ts.SyntaxKind.ConditionalType]: 'ConditionalType',
  [ts.SyntaxKind.InferType]: 'InferType',
  [ts.SyntaxKind.ParenthesizedType]: 'ParenthesizedType',
  [ts.SyntaxKind.ThisType]: 'ThisType',
  [ts.SyntaxKind.TypeOperator]: 'TypeOperator',
  [ts.SyntaxKind.IndexedAccessType]: 'IndexedAccessType',
  [ts.SyntaxKind.MappedType]: 'MappedType',
  [ts.SyntaxKind.LiteralType]: 'LiteralType',
  [ts.SyntaxKind.NamedTupleMember]: 'NamedTupleMember',
  [ts.SyntaxKind.TemplateLiteralType]: 'TemplateLiteralType',
  [ts.SyntaxKind.TemplateLiteralTypeSpan]: 'TemplateLiteralTypeSpan',
  [ts.SyntaxKind.ImportType]: 'ImportType',
  [ts.SyntaxKind.ObjectBindingPattern]: 'ObjectBindingPattern',
  [ts.SyntaxKind.ArrayBindingPattern]: 'ArrayBindingPattern',
  [ts.SyntaxKind.BindingElement]: 'BindingElement',
  [ts.SyntaxKind.ArrayLiteralExpression]: 'ArrayLiteralExpression',
  [ts.SyntaxKind.ObjectLiteralExpression]: 'ObjectLiteralExpression',
  [ts.SyntaxKind.PropertyAccessExpression]: 'PropertyAccessExpression',
  [ts.SyntaxKind.ElementAccessExpression]: 'ElementAccessExpression',
  [ts.SyntaxKind.CallExpression]: 'CallExpression',
  [ts.SyntaxKind.NewExpression]: 'NewExpression',
  [ts.SyntaxKind.TaggedTemplateExpression]: 'TaggedTemplateExpression',
  [ts.SyntaxKind.TypeAssertionExpression]: 'TypeAssertionExpression',
  [ts.SyntaxKind.ParenthesizedExpression]: 'ParenthesizedExpression',
  [ts.SyntaxKind.FunctionExpression]: 'FunctionExpression',
  [ts.SyntaxKind.ArrowFunction]: 'ArrowFunction',
  [ts.SyntaxKind.DeleteExpression]: 'DeleteExpression',
  [ts.SyntaxKind.TypeOfExpression]: 'TypeOfExpression',
  [ts.SyntaxKind.VoidExpression]: 'VoidExpression',
  [ts.SyntaxKind.AwaitExpression]: 'AwaitExpression',
  [ts.SyntaxKind.PrefixUnaryExpression]: 'PrefixUnaryExpression',
  [ts.SyntaxKind.PostfixUnaryExpression]: 'PostfixUnaryExpression',
  [ts.SyntaxKind.BinaryExpression]: 'BinaryExpression',
  [ts.SyntaxKind.ConditionalExpression]: 'ConditionalExpression',
  [ts.SyntaxKind.TemplateExpression]: 'TemplateExpression',
  [ts.SyntaxKind.YieldExpression]: 'YieldExpression',
  [ts.SyntaxKind.SpreadElement]: 'SpreadElement',
  [ts.SyntaxKind.ClassExpression]: 'ClassExpression',
  [ts.SyntaxKind.OmittedExpression]: 'OmittedExpression',
  [ts.SyntaxKind.ExpressionWithTypeArguments]: 'ExpressionWithTypeArguments',
  [ts.SyntaxKind.AsExpression]: 'AsExpression',
  [ts.SyntaxKind.NonNullExpression]: 'NonNullExpression',
  [ts.SyntaxKind.MetaProperty]: 'MetaProperty',
  [ts.SyntaxKind.SyntheticExpression]: 'SyntheticExpression',
  [ts.SyntaxKind.TemplateSpan]: 'TemplateSpan',
  [ts.SyntaxKind.SemicolonClassElement]: 'SemicolonClassElement',
  [ts.SyntaxKind.Block]: 'Block',
  [ts.SyntaxKind.EmptyStatement]: 'EmptyStatement',
  [ts.SyntaxKind.VariableStatement]: 'VariableStatement',
  [ts.SyntaxKind.ExpressionStatement]: 'ExpressionStatement',
  [ts.SyntaxKind.IfStatement]: 'IfStatement',
  [ts.SyntaxKind.DoStatement]: 'DoStatement',
  [ts.SyntaxKind.WhileStatement]: 'WhileStatement',
  [ts.SyntaxKind.ForStatement]: 'ForStatement',
  [ts.SyntaxKind.ForInStatement]: 'ForInStatement',
  [ts.SyntaxKind.ForOfStatement]: 'ForOfStatement',
  [ts.SyntaxKind.ContinueStatement]: 'ContinueStatement',
  [ts.SyntaxKind.BreakStatement]: 'BreakStatement',
  [ts.SyntaxKind.ReturnStatement]: 'ReturnStatement',
  [ts.SyntaxKind.WithStatement]: 'WithStatement',
  [ts.SyntaxKind.SwitchStatement]: 'SwitchStatement',
  [ts.SyntaxKind.LabeledStatement]: 'LabeledStatement',
  [ts.SyntaxKind.ThrowStatement]: 'ThrowStatement',
  [ts.SyntaxKind.TryStatement]: 'TryStatement',
  [ts.SyntaxKind.DebuggerStatement]: 'DebuggerStatement',
  [ts.SyntaxKind.VariableDeclaration]: 'VariableDeclaration',
  [ts.SyntaxKind.VariableDeclarationList]: 'VariableDeclarationList',
  [ts.SyntaxKind.FunctionDeclaration]: 'FunctionDeclaration',
  [ts.SyntaxKind.ClassDeclaration]: 'ClassDeclaration',
  [ts.SyntaxKind.InterfaceDeclaration]: 'InterfaceDeclaration',
  [ts.SyntaxKind.TypeAliasDeclaration]: 'TypeAliasDeclaration',
  [ts.SyntaxKind.EnumDeclaration]: 'EnumDeclaration',
  [ts.SyntaxKind.ModuleDeclaration]: 'ModuleDeclaration',
  [ts.SyntaxKind.ModuleBlock]: 'ModuleBlock',
  [ts.SyntaxKind.CaseBlock]: 'CaseBlock',
  [ts.SyntaxKind.NamespaceExportDeclaration]: 'NamespaceExportDeclaration',
  [ts.SyntaxKind.ImportEqualsDeclaration]: 'ImportEqualsDeclaration',
  [ts.SyntaxKind.ImportDeclaration]: 'ImportDeclaration',
  [ts.SyntaxKind.ImportClause]: 'ImportClause',
  [ts.SyntaxKind.NamespaceImport]: 'NamespaceImport',
  [ts.SyntaxKind.NamedImports]: 'NamedImports',
  [ts.SyntaxKind.ImportSpecifier]: 'ImportSpecifier',
  [ts.SyntaxKind.ExportAssignment]: 'ExportAssignment',
  [ts.SyntaxKind.ExportDeclaration]: 'ExportDeclaration',
  [ts.SyntaxKind.NamedExports]: 'NamedExports',
  [ts.SyntaxKind.NamespaceExport]: 'NamespaceExport',
  [ts.SyntaxKind.ExportSpecifier]: 'ExportSpecifier',
  [ts.SyntaxKind.MissingDeclaration]: 'MissingDeclaration',
  [ts.SyntaxKind.ExternalModuleReference]: 'ExternalModuleReference',
  [ts.SyntaxKind.JsxElement]: 'JsxElement',
  [ts.SyntaxKind.JsxSelfClosingElement]: 'JsxSelfClosingElement',
  [ts.SyntaxKind.JsxOpeningElement]: 'JsxOpeningElement',
  [ts.SyntaxKind.JsxClosingElement]: 'JsxClosingElement',
  [ts.SyntaxKind.JsxFragment]: 'JsxFragment',
  [ts.SyntaxKind.JsxOpeningFragment]: 'JsxOpeningFragment',
  [ts.SyntaxKind.JsxClosingFragment]: 'JsxClosingFragment',
  [ts.SyntaxKind.JsxAttribute]: 'JsxAttribute',
  [ts.SyntaxKind.JsxAttributes]: 'JsxAttributes',
  [ts.SyntaxKind.JsxSpreadAttribute]: 'JsxSpreadAttribute',
  [ts.SyntaxKind.JsxExpression]: 'JsxExpression',
  [ts.SyntaxKind.CaseClause]: 'CaseClause',
  [ts.SyntaxKind.DefaultClause]: 'DefaultClause',
  [ts.SyntaxKind.HeritageClause]: 'HeritageClause',
  [ts.SyntaxKind.CatchClause]: 'CatchClause',
  [ts.SyntaxKind.PropertyAssignment]: 'PropertyAssignment',
  [ts.SyntaxKind.ShorthandPropertyAssignment]: 'ShorthandPropertyAssignment',
  [ts.SyntaxKind.SpreadAssignment]: 'SpreadAssignment',
  [ts.SyntaxKind.EnumMember]: 'EnumMember',
  [ts.SyntaxKind.UnparsedPrologue]: 'UnparsedPrologue',
  [ts.SyntaxKind.UnparsedPrepend]: 'UnparsedPrepend',
  [ts.SyntaxKind.UnparsedText]: 'UnparsedText',
  [ts.SyntaxKind.UnparsedSyntheticReference]: 'UnparsedSyntheticReference',
  [ts.SyntaxKind.SourceFile]: 'SourceFile',
  [ts.SyntaxKind.Bundle]: 'Bundle',
  [ts.SyntaxKind.UnparsedSource]: 'UnparsedSource',
  [ts.SyntaxKind.InputFiles]: 'InputFiles',
  [ts.SyntaxKind.JSDocTypeExpression]: 'JSDocTypeExpression',
  [ts.SyntaxKind.JSDocNameReference]: 'JSDocNameReference',
  [ts.SyntaxKind.JSDocAllType]: 'JSDocAllType',
  [ts.SyntaxKind.JSDocUnknownType]: 'JSDocUnknownType',
  [ts.SyntaxKind.JSDocNullableType]: 'JSDocNullableType',
  [ts.SyntaxKind.JSDocNonNullableType]: 'JSDocNonNullableType',
  [ts.SyntaxKind.JSDocOptionalType]: 'JSDocOptionalType',
  [ts.SyntaxKind.JSDocFunctionType]: 'JSDocFunctionType',
  [ts.SyntaxKind.JSDocVariadicType]: 'JSDocVariadicType',
  [ts.SyntaxKind.JSDocNamepathType]: 'JSDocNamepathType',
  [ts.SyntaxKind.JSDocComment]: 'JSDocComment',
  [ts.SyntaxKind.JSDocTypeLiteral]: 'JSDocTypeLiteral',
  [ts.SyntaxKind.JSDocSignature]: 'JSDocSignature',
  [ts.SyntaxKind.JSDocTag]: 'JSDocTag',
  [ts.SyntaxKind.JSDocAugmentsTag]: 'JSDocAugmentsTag',
  [ts.SyntaxKind.JSDocImplementsTag]: 'JSDocImplementsTag',
  [ts.SyntaxKind.JSDocAuthorTag]: 'JSDocAuthorTag',
  [ts.SyntaxKind.JSDocDeprecatedTag]: 'JSDocDeprecatedTag',
  [ts.SyntaxKind.JSDocClassTag]: 'JSDocClassTag',
  [ts.SyntaxKind.JSDocPublicTag]: 'JSDocPublicTag',
  [ts.SyntaxKind.JSDocPrivateTag]: 'JSDocPrivateTag',
  [ts.SyntaxKind.JSDocProtectedTag]: 'JSDocProtectedTag',
  [ts.SyntaxKind.JSDocReadonlyTag]: 'JSDocReadonlyTag',
  [ts.SyntaxKind.JSDocCallbackTag]: 'JSDocCallbackTag',
  [ts.SyntaxKind.JSDocEnumTag]: 'JSDocEnumTag',
  [ts.SyntaxKind.JSDocParameterTag]: 'JSDocParameterTag',
  [ts.SyntaxKind.JSDocReturnTag]: 'JSDocReturnTag',
  [ts.SyntaxKind.JSDocThisTag]: 'JSDocThisTag',
  [ts.SyntaxKind.JSDocTypeTag]: 'JSDocTypeTag',
  [ts.SyntaxKind.JSDocTemplateTag]: 'JSDocTemplateTag',
  [ts.SyntaxKind.JSDocTypedefTag]: 'JSDocTypedefTag',
  [ts.SyntaxKind.JSDocSeeTag]: 'JSDocSeeTag',
  [ts.SyntaxKind.JSDocPropertyTag]: 'JSDocPropertyTag',
  [ts.SyntaxKind.SyntaxList]: 'SyntaxList',
  [ts.SyntaxKind.NotEmittedStatement]: 'NotEmittedStatement',
  [ts.SyntaxKind.PartiallyEmittedExpression]: 'PartiallyEmittedExpression',
  [ts.SyntaxKind.CommaListExpression]: 'CommaListExpression',
};

export function getKindNameFromNode(node: ts.Node): string {
  // @ts-ignore
  return kindToString[node.kind];
}
