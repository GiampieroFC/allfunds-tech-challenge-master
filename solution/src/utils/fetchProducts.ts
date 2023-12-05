export const fetchProducts = async (path: string = '') => {
    const reponse = await fetch(`http://127.0.0.1:3000/grocery${path}`);
    const grocery = await reponse.json();

    return grocery;
}