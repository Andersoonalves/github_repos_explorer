import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues} from './styles';
import logImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
            Back
            </Link>
            </Header>
            <RepositoryInfo>

            </RepositoryInfo>

            <Issues>
            <Link key={repository.full_name}
                    to={`/repositories/${repository.full_name}`}>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
            </Issues>
        </>
    );
}

export default Repository;
