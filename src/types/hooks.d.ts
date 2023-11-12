export type UsePromiseStatus = "idle" | "pending" | "rejected" | "fulfilled";

export type UsePromiseCallback<M> = () => Promise<M>;
