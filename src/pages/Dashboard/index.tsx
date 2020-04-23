import React from 'react';

import {FiChevronRight} from 'react-icons/fi'

import { Title, Form , Repositories} from './styles';
import logImg from '../../assets/logo.svg';
import { format } from 'path';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logImg} alt="Github Explorer"/>
            <Title>Explore repositories on Github.</Title>
            <Form>
                <input type="text" placeholder="Repository Name"/>
                <button type="submit">Search</button>
            </Form>
            <Repositories>
                <a href="tet">
                    <img src="https://avatars1.githubusercontent.com/u/1179700?s=460&u=46e09e5a89df69d85edd5dfed79ddea89298ed1d&v=4" alt="teste"/>
                    <div>
                        <strong>Andersoonalves/node-base-project</strong>
                        <p>NodeJS Base Project</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
                <a href="tet">
                    <img src="https://avatars1.githubusercontent.com/u/1179700?s=460&u=46e09e5a89df69d85edd5dfed79ddea89298ed1d&v=4" alt="teste"/>
                    <div>
                        <strong>Andersoonalves/node-base-project</strong>
                        <p>NodeJS Base Project</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;
