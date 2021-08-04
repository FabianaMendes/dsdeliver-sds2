import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 290px auto;
    grid-template-rows: 60px auto;
    grid-template-areas: 
    'AS MH'
    'AS CT';
    height: 100vh;
`;