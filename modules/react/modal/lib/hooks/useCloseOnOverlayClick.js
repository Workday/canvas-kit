"use strict";
exports.__esModule = true;
exports.useCloseOnOverlayClick = void 0;
var react_1 = require("react");
var canvas_kit_popup_stack_1 = require("@workday/canvas-kit-popup-stack");
var common_1 = require("@workday/canvas-kit-react/common");
var popup_1 = require("@workday/canvas-kit-react/popup");
/**
 * Registers global listener for all clicks. It will only call the PopupModel's `hide` event if the
 * click happened outside the `[role=dialog]` of an overlay component. The difference between `useCloseOnOutsideClick`
 * and `useCloseOnOverlayClick` is the Overlay is a child of a `stackRef` element and has a different
 */
exports.useCloseOnOverlayClick = common_1.createElemPropsHook(popup_1.usePopupModel)(function (model) {
    var modality = common_1.useModalityType();
    var onClick = react_1["default"].useCallback(function (event) {
        if (!model.state.stackRef.current) {
            return;
        }
        var elements = canvas_kit_popup_stack_1.PopupStack.getElements()
            .filter(function (e) { return e.getAttribute('data-behavior-click-outside-close') === 'topmost'; })
            .sort(function (a, b) { return Number(a.style.zIndex) - Number(b.style.zIndex); });
        var dialog = model.state.stackRef.current.querySelector('[role=dialog]');
        // Create a list of parent elements of the dialog to detect overlay clicks
        var elementsBetweenDialogAnBody = [];
        var element = dialog;
        while (element === null || element === void 0 ? void 0 : element.parentElement) {
            elementsBetweenDialogAnBody.push(element.parentElement);
            element = (element === null || element === void 0 ? void 0 : element.parentElement) || null;
        }
        if (dialog &&
            modality !== 'touch' &&
            elements.length &&
            elements[elements.length - 1] === model.state.stackRef.current &&
            elementsBetweenDialogAnBody.some(function (element) { return element === event.target; })) {
            model.events.hide(event);
        }
    }, [model.state.stackRef, model.events, modality]);
    var visible = model.state.visibility !== 'hidden';
    react_1["default"].useLayoutEffect(function () {
        var _a;
        if (!visible) {
            return;
        }
        document.addEventListener('mousedown', onClick);
        (_a = model.state.stackRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute('data-behavior-click-outside-close', 'topmost');
        return function () {
            document.removeEventListener('mousedown', onClick);
        };
    }, [model.state.stackRef, visible, onClick]);
    return {};
});
