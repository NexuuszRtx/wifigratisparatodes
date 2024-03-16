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

        <h1>Termos de Serviço - Wi-Fi Gratuito</h1>

        <p><strong>Vigência:</strong> 16 de março de 2024</p>

        <p>Ao utilizar o Wi-Fi gratuito (Serviço) fornecido por [WGBA], você concorda com estes Termos de Serviço (Termos).</p>

        <h2>Uso do Serviço</h2>

        <ul>
          <li>O Serviço é fornecido como está e sem garantia de qualidade.</li>
          <li>O Provedor reserva o direito de interromper ou modificar o Serviço a qualquer momento.</li>
          <li>O uso do Serviço é de sua responsabilidade.</li>
          <li>Você concorda em não usar o Serviço para fins ilegais ou maliciosos.</li>
        </ul>

        <h2>Limitação de Responsabilidade</h2>

        <p>O Provedor não se responsabiliza por qualquer perda ou dano causado pelo uso do Serviço.</p>
        <p>O Provedor não se responsabiliza por falhas ou interrupções no Serviço.</p>
        <p>O Provedor não se responsabiliza por conteúdo acessado através do Serviço.</p>

        <h2>Segurança e Privacidade</h2>

        <p>O Provedor não garante a segurança do Serviço.</p>
        <p>O Provedor pode monitorar o uso do Serviço para fins de segurança e desempenho.</p>
        <p>O Provedor pode coletar e armazenar informações sobre seu dispositivo e uso do Serviço.</p>

        <h2>Alterações nos Termos</h2>

        <p>O Provedor pode alterar estes Termos a qualquer momento.</p>
        <p>As alterações nos Termos serão publicadas no site do Provedor.</p>
        <p>Ao continuar usando o Serviço após a publicação de alterações nos Termos, você concorda com as alterações.</p>

        <h2>Uso de Dados</h2>

        <p>Wifi Grátis de alunos Brasil - WGAB Dados pode utilizar Seus dados a modo livre, incluindo o phishing, entre outros. <strong>(Atenção: Esta prática é nociva e ilegal)</strong></p>

        <h2>Consentimento</h2>

        <p>Ao acessar este site, você concorda com o uso de seus dados, de acordo com estes Termos de Serviço.</p>

        <h2>Aceitação Integral</h2>

        <p><strong>Ao usar este site, você aceita integralmente estes Termos de Serviço. (Importante deixar claro que aceitar esses termos permite práticas nocivas)</strong></p>
      </section>
    </div>
  );
};

export default TermsOfService;
