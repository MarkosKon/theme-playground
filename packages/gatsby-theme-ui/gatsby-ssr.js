// https://github.com/system-ui/theme-ui/blob/master/packages/gatsby-theme-ui/gatsby-ssr.js
import { jsx } from "theme-ui";

export { wrapRootElement } from "./src/rootElement";

const noflash = `
(function() {
  try {
    var mode = localStorage.getItem('theme-ui-color-mode');
    if (!mode) return
    document.body.classList.add('theme-ui-' + mode);
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = jsx("script", {
    dangerouslySetInnerHTML: {
      __html: noflash
    }
  });
  setPreBodyComponents([script]);
};
