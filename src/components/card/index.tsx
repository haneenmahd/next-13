'use client';

import styled from 'styled-components';
import { Repo } from '@/lib/types';
import colors from '@/theme/colors';
import Graphic from '../graphic';
import type { FC } from 'react'

const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 646.522px;
    height: 407.673px;
    border-radius: 12px;
    border: 1px solid #E1E1E1;
    background: #FFF;
    transition: 300ms;
    box-shadow: 0 2px 4px ${colors.text.quarternary}10;

    *::selection {
        background: ${colors.text.primary};
    }
`;

const Info = styled.div`
    padding: 2rem;
    z-index: 1;
`;

const RepoName = styled.div`
    color: ${colors.text.primary};
    font-size: 63.723px;
    line-height: 126.5%;
    letter-spacing: -2.23px;
`;

const RepoDescription = styled.div`
    color: ${colors.text.primary};
    font-size: 23.896px;
    line-height: 126.5%;
    letter-spacing: -0.836px;
`;

const RepoExtraInfo = styled.div`
    max-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    min-width: 225.685px;
    height: 29.206px;
    flex-shrink: 0;
    border-radius: 3.983px;
    border: 1.328px solid ${colors.text.primary};
    background: #FFF;
`;

const RepoAuthorName = styled.div`
    color: ${colors.text.primary};
    font-size: 15.931px;
    font-weight: 450;
    line-height: 126.5%;
    letter-spacing: -0.558px;
    text-transform: uppercase;
`;

const RepoDivider = styled.div`
    height: 10.6px;
    width: 10.6px;
    background-color: ${colors.text.primary};
`;

const RepoStars = styled.div`
    color: ${colors.text.primary};
    font-size: 15.931px;
    font-weight: 450;
    line-height: 126.5%;
    letter-spacing: -0.558px;
    text-transform: uppercase;
`;

const GraphicContent = styled.div`
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 0;
`;

interface CardProps {
    repo: Repo;
    graphicType: 'basic' | 'flow' | 'grid' | 'rectangles';
    flowType: 's-letter' | 'r-letter' | 'plus-levitated' | 'green-head';
}

const Card: FC<CardProps> = ({ repo, graphicType, flowType }) => {
    return (
        <Container>
            <Info>
                <RepoName>{repo.name}</RepoName>
                <RepoDescription>{repo.description}</RepoDescription>

                <RepoExtraInfo>
                    <RepoAuthorName>{repo.owner.login}</RepoAuthorName>

                    <RepoDivider />

                    <RepoStars>{repo.stargazers_count.toLocaleString('en-US')} Stars</RepoStars>
                </RepoExtraInfo>
            </Info>

            <GraphicContent>
                <Graphic
                    type={graphicType}
                    childProps={{
                        primaryColor: colors.extras.blue1,
                        secondaryColor: colors.extras.blue2,
                        tertiaryColor: colors.extras.blue3,
                        type: flowType
                    }}
                />
            </GraphicContent>
        </Container>
    )
}

export default Card