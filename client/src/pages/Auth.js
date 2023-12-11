import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click =  async () => {
        try {
            let userData
            if (isLogin) {
                userData = await login(email,password)
            } else {
                userData = await registration(email,password)
            }
            console.log(userData)
            user.setUser(userData)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    return (
        <Container
           style={{height: window.innerHeight - 54}}
           className="d-flex justify-content-center align-items-center"
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       className="mt-3"
                       placeholder="Введите ваш e-mail..."
                    />
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <Row>
                      <Col className="d-flex justify-content-between mt-3 ps-3 pe-3">
                          {isLogin ?
                              <div>
                                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                              </div>
                              :
                              <div>
                                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                              </div>
                          }
                          <Button
                              variant={"outline-success"}
                              onClick={click}
                          >
                              {isLogin ? "Войти": "Регистрация"}
                          </Button>
                      </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;