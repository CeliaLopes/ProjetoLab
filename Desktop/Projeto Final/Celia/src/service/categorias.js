class CategoriasService {
    constructor (CategoriasModel) {
      this.categoria = CategoriasModel
    }
  
    async get () {
      const categoria = await this.categoria.findAll()
      return categoria
    }
  
    async adicionar (categoriaDTO) {
      // verifica se já existe produto com o mesmo nome
      // const categorias = await this.categorias.findOne({
      //   where: {
      //     categoria: categoriasDTO.categoria
      //   }
      // })
      if (categoria != null) {
        throw new Error('Já existe um produto cadastrado com esse nome!')
      }
      try {
        await this.categoria.create(categoriaDTO)
      } catch (erro) {
        console.erro(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = CategoriasService