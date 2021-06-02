import { EVENTS } from '../constants';
import { Ref } from '../types';
import isHTMLElement from '../utils/isHTMLElement';

export default (
  ref: Ref,
  validateWithStateUpdate?: EventListenerOrEventListenerObject,
): void => {
  if (
    isHTMLElement(ref) &&
    ref.removeEventListener &&
    validateWithStateUpdate
  ) {
    ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
    ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
    ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
  }
};
