const Profile = () => {
  // Por ahora el email es estático; en un hito futuro vendrá de la autenticación.
  const email = 'patricio@correo.com';

  return (
    <div className="container my-5" style={{ maxWidth: '480px' }}>
      <div className="card shadow-sm text-center">
        <div className="card-body">
          <div className="fs-1 mb-2">👤</div>
          <h2 className="card-title">Mi perfil</h2>
          <p className="card-text text-muted mb-1">Correo electrónico</p>
          <p className="card-text fw-bold fs-5">{email}</p>
          {/* El botón es estático por ahora: la sesión se implementará en un hito futuro. */}
          <button className="btn btn-dark" onClick={() => {}}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
