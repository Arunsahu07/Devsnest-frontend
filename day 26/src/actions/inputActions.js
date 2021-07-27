function firstNameHandler(input)
{
    return {
        type: 'FIRST_NAME',
        firstName : input,
    };
}

function lastNameHandler(input)
{
    return {
        type:"LAST_NAME",
        lastName: input,
    };
}
export {firstNameHandler ,lastNameHandler}