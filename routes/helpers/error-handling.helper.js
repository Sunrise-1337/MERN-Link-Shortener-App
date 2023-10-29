const toConcatErrors = (errors) => {
    const concatedError = errors.errors.reduce((acc, el, i) => {
        const isFirstElement = i === 0,
            modifiedMessage = '<br />' + el.msg

        return acc += (isFirstElement ? el.msg : modifiedMessage)
    }, '')

    return concatedError
}

const toHandleValidationErrors = (response, errors) => {
    if (!errors.isEmpty()) {
        response.status(400).json({
            message: toConcatErrors(errors)
        })

        return true
    }

    return false
}

module.exports = {
    toHandleValidationErrors
}