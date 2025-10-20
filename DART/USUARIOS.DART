class Usuarios {
  int id_usuario = 0;
  String nome = '';
  String email = '';
  String senha = '';
  DateTime criado_em = DateTime.now();
  String foto_perfil = '';
  List<PERFIL> Perfil = [];
  List<ATIVIDADES> Atividades = [];
}