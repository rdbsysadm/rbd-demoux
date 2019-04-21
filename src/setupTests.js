// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import 'mdbreact/dist/css/mdb.css';
import "./assets/scss/mdb.scss"
configure({ adapter: new Adapter() });
