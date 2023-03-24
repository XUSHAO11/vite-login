
import ajax from "./http";

export const Login = async (data) => {
    let res = await ajax.get("/login", { ...data });
    return res
}
export async function Auth(data) {

}


export async function Menu(data) {

}
