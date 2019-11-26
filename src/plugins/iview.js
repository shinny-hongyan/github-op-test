// iview 按需引用
import Vue from 'vue'
import 'view-design/dist/styles/iview.css';
import {LoadingBar, Message, Modal, Notice, Spin} from 'view-design';

Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Spin = Spin;

import {Layout, Icon, ButtonGroup, Button, Dropdown, DropdownMenu, DropdownItem} from 'view-design';
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.component('Button', Button);
Vue.component('ButtonGroup', ButtonGroup);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);



// const components = {
//     Affix,
//     Alert,
//     Anchor,
//     AnchorLink,
//     AutoComplete,
//     Avatar,
//     BackTop,
//     Badge,
//     Breadcrumb,
//     BreadcrumbItem: Breadcrumb.Item,
//     Button,
//     ButtonGroup: Button.Group,
//     Card,
//     Carousel,
//     CarouselItem: Carousel.Item,
//     Cascader,
//     Cell,
//     CellGroup: Cell.Group,
//     Checkbox,
//     CheckboxGroup: Checkbox.Group,
//     Col,
//     Collapse,
//     ColorPicker,
//     Content: Content,
//     DatePicker,
//     Divider,
//     Drawer,
//     Dropdown,
//     DropdownItem: Dropdown.Item,
//     DropdownMenu: Dropdown.Menu,
//     Footer: Footer,
//     Form,
//     FormItem: Form.Item,
//     Header: Header,
//     Icon,
//     Input,
//     InputNumber,
//     Scroll,
//     Sider: Sider,
//     Split,
//     Submenu: Menu.Sub,
//     Layout: Layout,
//     List,
//     ListItem: List.Item,
//     ListItemMeta: List.Item.Meta,
//     LoadingBar,
//     Menu,
//     MenuGroup: Menu.Group,
//     MenuItem: Menu.Item,
//     Message,
//     Modal,
//     Notice,
//     Option: Option,
//     OptionGroup,
//     Page,
//     Panel: Collapse.Panel,
//     Poptip,
//     Progress,
//     Radio,
//     RadioGroup: Radio.Group,
//     Rate,
//     Row,
//     Select,
//     Slider,
//     Spin,
//     Step: Steps.Step,
//     Steps,
//     Table,
//     Tabs: Tabs,
//     TabPane: Tabs.Pane,
//     Tag,
//     Time,
//     Timeline,
//     TimelineItem: Timeline.Item,
//     TimePicker,
//     Tooltip,
//     Transfer,
//     Tree,
//     Upload
// };
