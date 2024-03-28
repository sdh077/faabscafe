interface IAddr {
    address: string;
    zonecode: string;
}
export const postSearch = () => {
    new window.daum.Postcode({
        oncomplete: function (data: IAddr) {
            (document.getElementById("address1") as HTMLInputElement).value =
                data.address;
            (document.getElementById("address_post") as HTMLInputElement).value =
                data.zonecode;
            document.getElementById("address2")?.focus();
        },
    }).open();
}