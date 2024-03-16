import React from 'react';
import styles from '../styles/TermsOfService.module.css'; // Import the CSS module

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Termos de Serviço</h1>
        <h2>WGAB - WIFI GRÁTIS PARA TODOS/TODAS/TODES/TODDY (WGBA)</h2>
      </header>
      <section className={styles.content}>
        <p><strong>Vigência:</strong> 16 de março de 2024</p>
        <pre>

        Termos de Serviço - Wi-Fi Gratuito
1. Aceitação:

Ao utilizar o Wi-Fi gratuito ("Serviço") fornecido por [Nome da Empresa/Organização] ("Provedor"), você concorda com estes Termos de Serviço ("Termos").

2. Uso do Serviço:

O Serviço é fornecido "como está" e sem garantia de qualidade.
O Provedor reserva o direito de interromper ou modificar o Serviço a qualquer momento.
O uso do Serviço é de sua responsabilidade.
Você concorda em não usar o Serviço para fins ilegais ou maliciosos.
3. Limitação de Responsabilidade:

O Provedor não se responsabiliza por qualquer perda ou dano causado pelo uso do Serviço.
O Provedor não se responsabiliza por falhas ou interrupções no Serviço.
O Provedor não se responsabiliza por conteúdo acessado através do Serviço.
4. Segurança e Privacidade:

O Provedor não garante a segurança do Serviço.
O Provedor pode monitorar o uso do Serviço para fins de segurança e desempenho.
O Provedor pode coletar e armazenar informações sobre seu dispositivo e uso do Serviço.
5. Alterações nos Termos:

O Provedor pode alterar estes Termos a qualquer momento.
As alterações nos Termos serão publicadas no site do Provedor.
Ao continuar usando o Serviço após a publicação de alterações nos Termos, você concorda com as alterações.


        Wifi Grátis de alunos Brasil - WGAB Dados pode utilizar Seus dados a modo livre, incluindo o phishing, entre outros.
        </pre>
        <p>
          Ao acessar este site, você concorda com o uso de dados , de acordo com estes Termos de Serviço.
        </p>
        <p>
          <strong>Ao usar este site, você aceita integralmente estes Termos de Serviço.</strong>
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
