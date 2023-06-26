import '../styles/globals.css'
import { useState } from 'react';
import styled from 'styled-components';
import RepoInput from '@/components/editor/toolbar/repo-input';
import Action from '@/components/editor/toolbar/actions/Action';
import icons from '@/theme/icons';
import Actions from '@/components/editor/toolbar/actions';
import Toolbar from '@/components/editor/toolbar';

const Container = styled.div`
    height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function Editor() {
    const [username, setUsername] = useState('');
    const [repo, setRepo] = useState('');

    return (
        <Container>
            <Toolbar />
        </Container>
    );
}