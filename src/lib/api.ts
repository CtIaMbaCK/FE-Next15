

const backendDomain = process.env.CHATBOT_URL

export const API = {
    auth : {
        login : `${backendDomain}/auth/login`,
        register: `${backendDomain}auth/register`
    }
};


