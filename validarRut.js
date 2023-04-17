export const Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"

    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;

        var tmp = rutCompleto.split("-");
        [12345678, 9];

        var digv = tmp[1];

        var rut = tmp[0];

        if (digv == "K") digv = "k";

        //console.log("resultado de la validacion", Fn.dv(rut));

        return Fn.dv(rut) == digv;
    },

    dv: function (T) {
        var M = 0,
            S = 1;

        for (; T; T = Math.floor(T / 10))
            S = (S + (T % 10) * (9 - (M++ % 6))) % 11;

        //console.log(S ? S - 1 : "k");

        return S ? S - 1 : "k";
    },
};
