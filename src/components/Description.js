function Description() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    if(!isSpring) {
        return <p>Ce n'est pas le moment de rempoter</p>
    }
    return <p>C'est le printemps, rempotez !</p>;
}

export default Description;