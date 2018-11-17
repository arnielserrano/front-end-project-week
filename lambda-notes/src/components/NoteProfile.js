import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { HomeContainer } from './Home';

const MainSection = styled.section`
    display: flex;
    justify-content: space-between;
    > div {
        display: flex;
        justify-content: space-between;
        &:last-of-type {
            width: 10%;
        }
        > h1 {
            font-size: 34px;
            color: #545252;
            align-self: flex-end
        }
        > span {
            align-self: flex-start;
            font-size: 20px;
            font-weight: bolder;
            text-decoration: underline;
            color: #545252;
            cursor: pointer;
        }
    }
`

const NoteBody = styled.p`
    font-size: 22px;
    text-align: start;
    line-height: 35px;
`

const NoteProfile = props => {
    const note = props.notes.find(note => `${note._id}` === props.match.params.id);
    if(!note) return null;
    return  <HomeContainer>
                <MainSection>
                    <div>
                        <h1>{note.title}</h1>
                    </div>
                    <div>
                        <span>edit</span>
                        <span>delete</span>
                    </div>
                </MainSection>
                <NoteBody>{note.textBody}</NoteBody>
            </HomeContainer>
}
const mapStateToProps = state => {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(NoteProfile);