async function loadTransactions(){

const { data: { user } } = await supabase.auth.getUser()

if(!user){

window.location.href = "login.html"
return

}

let { data, error } = await supabase
.from("transactions")
.select("*")
.eq("user_id", user.id)
.order("created_at", { ascending:false })


let table = document.getElementById("transactionsTable")

table.innerHTML = ""


if(!data || data.length === 0){

table.innerHTML = `
<tr class="empty">
<td colspan="8">No transactions found</td>
</tr>
`

return

}


data.forEach(tx => {

let row = document.createElement("tr")

row.innerHTML = `

<td>${tx.type}</td>
<td>₵${tx.amount}</td>
<td>₵${tx.balance_before ?? 0}</td>
<td>₵${tx.balance_after ?? 0}</td>
<td>${tx.status}</td>
<td>${tx.reference ?? "-"}</td>
<td>${new Date(tx.created_at).toLocaleDateString()}</td>
<td><button>View</button></td>

`

table.appendChild(row)

})

}

loadTransactions()
