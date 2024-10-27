import {Hono} from "hono";
import {zValidator} from "@hono/zod-validator"
import { loginSchema, registerSchema } from "../schemas";



const app = new Hono()
    .post("/login", 
        zValidator("json", loginSchema),
        async (c) => {
            const { email, password } = c.req.valid("json");

            console.log("from login route", { email, password });
            
            return c.json({ email, password });
        })
    .post("/register",
        zValidator("json", registerSchema),
        async (c) => {
            const { name, email, password } = c.req.valid("json");
            console.log("from register route", { name, email, password });
            
            return c.json({ name, email, password, sucess: 200 });
    })
export default app;