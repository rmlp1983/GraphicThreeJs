/* Efolio A  - Computação gráfica
* Data de implementação - 29/10/2022
*Ano letivo 2022/2023
*Aluno - Ricardo Manuel Lopes Pereira - 2100022
*/

//Função que recebe dois objetos como input
//retorna um array de objetos (pontos) como output

function lineMP (primeiroPar, segundoPar) {

  //testar se os objetos não têm as propriedades necessárias para a função
  if(primeiroPar.x == null ||
     segundoPar.x == null ||
     primeiroPar.y == null ||
     segundoPar.y == null) {
      throw "Invalid object in the input!";
    }

    //caso os objetos tenham as propriedades corretas, corre o algoritmo
    else {
      var dx = segundoPar.x-primeiroPar.x;
      var dy = segundoPar.y-primeiroPar.y;
      var d = 2*dy-dx;
      var incrE = 2*dy;
      var incrNE = 2*(dy - dx);
      var x = primeiroPar.x;
      var y = primeiroPar.y;

      var output = []; /*primeiro ponto a adicionar ao array*/
      output.push({x,y});

      while (x < segundoPar.x) {
        if (d <=0) { /* Delta menor que 0, ponto abaixo do PM */
          d +=incrE;
          x++;
        }
        else { /* Delta maior ou igual que 0, ponto acima do PM */
          d+=incrNE;
          x++;
          y++;
        }

        output.push({x,y});

      } /* end while */
    } /* end MidpointLine */

    return output;
  }

  export { lineMP };
