import { createElement } from "./createElement";
import { setupEventListeners } from "./eventManager";
// import { updateElement } from "./updateElement";

import { normalizeVNode } from "./normalizeVNode";

export function renderElement(vNode, container) {
  const normalizedVNode = normalizeVNode(vNode);
  const element = createElement(normalizedVNode);
  container.innerHTML = ""; // 기존 내용을 비웁니다.
  container.appendChild(element);
  // 이벤트 위임
  setupEventListeners(container);
  // 최초 렌더링시에는 createElement로 DOM을 생성하고
  // 이후에는 updateElement로 기존 DOM을 업데이트한다.
  // 렌더링이 완료되면 container에 이벤트를 등록한다.
}
