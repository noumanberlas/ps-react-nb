module.exports = [{"name":"HelloWorld","description":"","props":{"message":{"type":{"name":"string"},"required":false,"description":""}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n\r\nfunction HelloWorld({message}){\r\n    return <div>Hello {message}</div>\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n    message : PropTypes.string\r\n}\r\n\r\nexport default HelloWorld;","examples":[]}]