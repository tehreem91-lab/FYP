import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbarlogo from "../../Assests/navbarlogo.png";
import { Avatar } from "@chakra-ui/react";
import { Menu, Dropdown } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import "./navbar.css";

const NavbarMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const  [name,setName] = useState()
  // const  [pic,setPic] = useState()
  const { token, userInfo } = useSelector((state) => state.AuthReducer);
  console.log(userInfo);
  // useEffect(() => {
  //   const fname = JSON.parse(localStorage.getItem("userInfo"))
  //   const newpic = JSON.parse(localStorage.getItem("userInfo"))
  //   // console.log(fname.name)
  //   setName(fname.name)
  //   setPic(newpic.pic)
  // },[]);

  const gotoProfile = () => {
    navigate(`/profile/${userInfo._id}`);
  };

  const Logout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("logout successfully");
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/chat">Chat</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <button onClick={gotoProfile}>Profile</button>
      </Menu.Item>
      <Menu.Item className="Menu_Items" key="2">
        <button onClick={Logout} className="logout_button">
          Log Out{" "}
          <LogoutOutlined
            style={{
              position: "relative",
              bottom: "2px",
              marginBlockStart: "10px",
            }}
          />
        </button>
      </Menu.Item>
    </Menu>
  );

  const Go = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar expand="lg" className="back">
        <Container>
          <Nav>
            <Navbar.Brand href="#home">
              <img src={navbarlogo} alt="" className="w-75 navbar_logo" />
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-danger toogle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  ">
              <Nav.Link>
                <Link
                  className={location.pathname === "/" ? "active" : "link"}
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={location.pathname === "/about" ? "active" : "link"}
                  to="/about"
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={
                    location.pathname === "/findTutor" ? "active" : "link"
                  }
                  to="/findTutor"
                >
                  Find Tutor
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={
                    location.pathname === "/ourcourse" ? "active" : "link"
                  }
                  to="/ourcourse"
                >
                  Our Courses
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className={
                    location.pathname === "/contact" ? "active" : "link"
                  }
                  to="/contact"
                >
                  Contact us
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {token ? (
                <>
                  <button className="avater-button">
                    <Dropdown overlay={menu}>
                      <button
                        className="btn ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Avatar
                          // mt="7px"
                          mr={1}
                          size="sm"
                          cursor="pointer"
                          src={userInfo.pic}
                        />
                        <span className="username text-white">
                          {userInfo.name}{" "}
                          <DownOutlined className="down_arrow" />
                        </span>
                      </button>
                    </Dropdown>
                  </button>
                </>
              ) : (
                <>
                  <Nav.Link className="login">
                    <button type="submit" value={"Login"} onClick={Go}>
                      Login/Register
                    </button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarMain;
