/** @jsx jsx */
// Wrappers so you can use the 'sx' prop inside MDX
// without declaring the custom pragma.
import { jsx, Box as BaseBox, Flex as BaseFlex } from "theme-ui";

const Box = props => <BaseBox {...props} />;
const Flex = props => <BaseFlex {...props} />;

export { Box, Flex };
