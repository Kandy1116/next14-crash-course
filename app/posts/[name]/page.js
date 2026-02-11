// function Page({params}) {
//   return (
//     <div>This is Post: {params.id}</div>
//   )
// }

// export default Page

async function Page({params}) {
    const {name} = await params;

    return (
        <div>This is Post: {name}</div>
    )
}

export default Page