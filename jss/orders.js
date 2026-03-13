async function loadOrders(){

const { data: { user } } = await supabase.auth.getUser()

if(!user){

window.location.href="login.html"
return

}

let { data, error } = await supabase
.from("orders")
.select("*")
.eq("user_id",user.id)
.order("created_at",{ ascending:false })

let table = document.getElementById("ordersTable")

table.innerHTML=""

if(!data || data.length === 0){

table.innerHTML = `
<tr class="empty">
<td colspan="8">No orders found</td>
</tr>
`

return

}

data.forEach(order=>{

let row = document.createElement("tr")

row.innerHTML = `

<td>${order.id}</td>
<td>${order.status}</td>
<td>${order.phone}</td>
<td>${order.bundle}GB</td>
<td>₵${order.price}</td>
<td>${order.network}</td>
<td>${new Date(order.created_at).toLocaleDateString()}</td>
<td><button>View</button></td>

`

table.appendChild(row)

})

}

loadOrders()
