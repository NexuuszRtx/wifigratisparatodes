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
        <p>
        Wifi Grátis de alunos Brasil - WGAB Dados pode utilizar Seus dados a modo livre, incluindo o phishing, entre outros.
        </p>
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
