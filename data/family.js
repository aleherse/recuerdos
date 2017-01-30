function family()
{
    return {
        familiar: {
            nombre: "Jay",
            apellidos: "Pritchett",
            avatar: () => require('./images/jay-pritchett.jpg'),
            activo: true,
            sexo: 'M'
        },
        pareja: {
            nombre: "Gloria",
            apellidos: "Delgado-Pritchett",
            avatar: () => require('./images/gloria-delgado-pritchett.jpg'),
            activo: true,
            sexo: 'F'
        },
        descendientes: [
            {
                familiar: {
                    nombre: "Manny",
                    apellidos: "Delgado",
                    avatar: () => require('./images/manny-delgado.jpg'),
                    activo: true,
                    sexo: 'M'
                }
            },
            {
                familiar: {
                    nombre: "Mitchell",
                    apellidos: "Pritchett",
                    avatar: () => require('./images/mitchell-pritchett.jpg'),
                    activo: true,
                    sexo: 'M'
                },
                pareja: {
                    nombre: "Cameron",
                    apellidos: "Tucker",
                    avatar: () => require('./images/cameron-tucker.jpg'),
                    activo: true,
                    sexo: 'M'
                },
                descendientes: [
                    {
                        familiar: {
                            nombre: "Lily",
                            apellidos: "Tucker-Pritchett",
                            avatar: () => require('./images/lily-tucker-pritchett.jpg'),
                            activo: true,
                            sexo: 'F'
                        }
                    },
                ]
            },
            {
                familiar: {
                    nombre: "Claire",
                    apellidos: "Dunphy",
                    avatar: () => require('./images/claire-dunphy.jpg'),
                    activo: true,
                    sexo: 'F'
                },
                pareja: {
                    nombre: "Phil",
                    apellidos: "Dunphy",
                    avatar: () => require('./images/phil-dunphy.jpg'),
                    activo: true,
                    sexo: 'M'
                },
                descendientes: [
                    {
                        familiar: {
                            nombre: "Haley",
                            apellidos: "Dunphy",
                            avatar: () => require('./images/haley-dunphy.jpg'),
                            activo: true,
                            sexo: 'F'
                        }
                    },
                    {
                        familiar: {
                            nombre: "Alex",
                            apellidos: "Dunphy",
                            avatar: () => require('./images/alex-dunphy.jpg'),
                            activo: true,
                            sexo: 'F'
                        }
                    },
                    {
                        familiar: {
                            nombre: "Luke",
                            apellidos: "Dunphy",
                            avatar: () => require('./images/luke-dunphy.jpg'),
                            activo: true,
                            sexo: 'M'
                        }
                    }
                ]
            },
        ]
    };
}

module.exports = family;
