
const displayVNDCurrency = (num) =>{
    const formatter = new Intl.NumberFormat('vi-VN',{
        minimumFractionDigits : 3
    })

    return formatter.format(num) +'Đ'
}

export default displayVNDCurrency