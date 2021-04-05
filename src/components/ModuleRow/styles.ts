import styled from 'styled-components';

export const RowContainer = styled.tbody`
    z-index: 2;
    background: #F8F8F8;

    transition: .15s;

    &:hover {
        background: #e0e0e0;
    }

    tr {
        td:first-child {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            font-size: 18px;
            font-weight: 500;

            .icon-wrapper {
                background: transparent;
                width: 22px;
                height: 22px;

                border-radius: 50%;
                margin-left: 12px;
                cursor: pointer;

                transition: .25s;

                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    background: #fff;
                }
            }
        }
    }

    @media (max-width: 980px) {
        tr {
            td:first-child {
                font-size: 16px;
            }
        }
    }
`;

export const SubmodulesContainer = styled.tbody<{ closed: boolean, containerLength: number }>`
    display: block;
    overflow: hidden;

    max-height: ${ props => props.closed ? 0 : 58 * props.containerLength }px;

    transition: .2s;
    
    tr {
        transition: transform .35s;
        transform: translateY(${ props => props.closed ? -58 * props.containerLength : 0 }px);
    
        td:first-child {
            font-size: 14px;

            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;