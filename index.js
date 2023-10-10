const callBackFunction = () => {
    console.log("callBack Function")
}

const receivesAFunction = (callBackFunction) => callBackFunction();


receivesAFunction(callBackFunction);

// const returnsANamedFunction = () => function something(){};

const returnsANamedFunction = () => {
    return function something(){};
};

returnsANamedFunction();

const returnsAnAnonymousFunction  = () => function(){};

returnsAnAnonymousFunction();