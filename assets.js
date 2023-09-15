export const styles = `
    .widget__container * {
        box-sizing: border-box;
    }        

    h3, p, input[type=text] {
        margin: 0;
        padding: 0;
    }

    .widget__container {
        box-shadow: 0 0 18px 8px rgba(23, 116, 69, 0.1), 0 0 32px 32px rgba(23, 116, 69, 0.08);
        width: 400px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }

    .widget__hidden {
        transform: scale(0);
    }

    .button__container {
        border: none;
        background-color: #1e7e4e;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }

    .widget__container.hidden {
        max-height: 0px;
    }

    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #177445;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }

    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 2px;
    }

    form {
        padding: 2rem 1rem 1.5rem;
    }

    form .form__field {
        margin-bottom: 0.1rem;
        display: flex;
        flex-direction: column;
    }

    .form__field label {
        font-size: 14px;
    }

    label[for=title] {
        margin-bottom: -16px;
        font-weight: 400;
    }

    label[for=question] {
        margin-top: 10px;
    }

    .form__field input[type=text] {
        border: 1px solid #000000;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
        height: 36px;
    }

    .form__field .option {
        margin-bottom: 4px;
        display: flex;
        align-items: left;
    }

    form button {
        height: 36px;
        border-radius: 6px;
        font-size: 14px;
        background-color: #177445;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }

    form button:hover {
        background-color: rgba(23, 116, 69, 95%);
    }
`;

export const CLOSE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;

export const SHIELD_ICON = `
    <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="3 3 32 32" xml:space="preserve" fill="#ffffff" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;stroke:#ffffff;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#ffffff;stroke-width:1.2;stroke-linejoin:round;stroke-miterlimit:10;} </style> 
        <path class="st0" d="M25,6.7c-3.4,0-6.6-1.4-9-3.7c-2.4,2.3-5.6,3.7-9,3.7C5.6,6.7,4.3,6.4,3,6c0,14,5.5,19.6,13,23 c7.5-3.4,13-9,13-23C27.7,6.4,26.4,6.7,25,6.7z"></path> 
        <path class="st0" d="M19,22h-6c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2v4C21,21.1,20.1,22,19,22z"></path> 
        <path class="st0" d="M20,14h-8v-2c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4V14z"></path> 
        <line class="st0" x1="16" y1="17" x2="16" y2="19"></line> </g>
    </svg>
`;