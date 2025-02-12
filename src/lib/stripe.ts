import { env } from "@/env";
import Stripe from "stripe";

const stripe = new Stripe(env.STRIP_SECRET_KEY);

export default stripe;
