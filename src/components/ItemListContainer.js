function ItemListContainer({ greeting }) {
    return (
      <div className="text-center text-9xl bg-slate-500 h-screen mt-24">
        <h2 className="pt-60">{greeting}</h2>
      </div>
    );
  }
  
  export default ItemListContainer;