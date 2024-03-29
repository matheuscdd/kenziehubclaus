import styled from 'styled-components';

export const ContInputStyle = styled.label`
    display: flex;
    flex-direction: column;
    gap: 22px;
    font-size: 12px;
    font-weight: var(--font-weight-1);
    color: var(--grey-0);
    align-items: flex-start;

    input, input::placeholder {
        font-size: 16px;
        font-weight: var(--font-weight-1);
    }

    input {
        background-color: transparent;
        padding: 0;
        outline: none;
        border: none;
        color: var(--grey-0);
        width: 95%;
    }

    input:disabled {
        color: var(--grey-1);
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        color: var(--grey-0);
        border: 1px solid transparent;
        background-color: var(--grey-2);
        outline: none;
        padding: 10.5px 16px;
        border-radius: var(--radius-1);
        transition: 0.5s;
    }

    input::placeholder {
        color: var(--grey-1);
    }

    div:focus-within {
        border-color: var(--grey-0);
    }

    span {
        background-color: transparent;
        border: none;
        outline: none;
        display: flex;
        cursor: pointer;
        align-items: center;
    }
`;

export const ErrorStyle = styled.small`
    user-select: none;
    display: block;
    font-size: 12px;
    color: var(--color-negative);
    margin-top: 8px;
    text-align: center;
`;