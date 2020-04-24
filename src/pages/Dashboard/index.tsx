import React, { useState, FormEvent } from 'react';
import {FiChevronRight} from 'react-icons/fi'
import { Title, Form , Repositories} from './styles';
import logImg from '../../assets/logo.svg';
import { format } from 'path';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setnewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();


        const response = await api.get<Repository>(`repos/${newRepo}`);
        console.log(response.data);
        const repository = response.data;

        setRepositories([...repositories, repository]);
        setnewRepo('');
    }

    return (
        <>
            <img src={logImg} alt="Github Explorer"/>
            <Title>Explore repositories on Github.</Title>
            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setnewRepo(e.target.value)}
                    type="text" placeholder="Repository Name"/>
                <button type="submit">Search</button>
            </Form>
            <Repositories>
                {repositories.map((repository) => (
                    <a key={repository.full_name} href="teste">
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20}/>
                    </a>
                ))
                }

            </Repositories>
        </>
    )
}

export default Dashboard;
