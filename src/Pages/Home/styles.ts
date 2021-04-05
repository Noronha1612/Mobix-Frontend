import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    min-width: 900px;
    width: 100%;

    margin: 0 auto;

    padding: 56px 48px;

    h1 {
        font-weight: 500;
        font-size: 26px;
        line-height: 30px;
    }

    .button-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            background: #6B7375;
            border: none;
            border-radius: 200px;

            color: #fff;
            font-size: 14px;
            font-weight: 500;
            line-height: 16px;

            padding: 12px 64px;
        }
    }
`;

export const ContentTable = styled.table`
    width: 100%;
    margin: 56px 0;
    border-spacing: 0px;

    * {
        border: none;
    }

    th, tr {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

        padding: 10px 16px;

        border: none;

        td + td {
            display: flex;
            justify-content: center;
        }
    }

    th {
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;

        display: flex;
        justify-content: center;
    }

    .all-row {
        background: #EFF1F1;
        
        padding: 16px;

        td:first-child {
            font-size: 18px;
            font-weight: 500;
        }
    }

    @media (max-width: 1030px) {
        th, tr {
            grid-template-columns: 1.25fr repeat(5, 1fr);
        }
    }

    @media (max-width: 980px) {
        th {
            font-size: 16px;
        }
    }
`;