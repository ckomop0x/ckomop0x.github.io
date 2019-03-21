import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout backgroundImage="https://lh3.googleusercontent.com/ks5aS-Z1B21-lLZgorcA2rQqMOEf6EQ4ldgy2nMM_F2tn9RK8mgwMbm9EKkXrrCj5Y4EneUkL-NzGFYqyIIcn6HVAbYfNkUsc8EaFf0LAmIOxiQi1ZfwjCMaiAP6WD6B0X2LbjqvMwfU1n1rsViJdNoSeFJ3S_o0RK0WrwDfUtQ4s1OJ1Ahj8f_6J8maXzZIP7mpiIE5AO_guRtcVb8AcOT5KOoDMhvxmBrsAZy_sY3qxO6YnI6zXJmRzDpigHDkWylOQAGaGVzdHGVSvaOD_i_u_LU27yh51ZUNI3c8WB_IRpdaBWhe3WsK8njCScMXhFcPN7CzjUxiZjBwwhpHlVOQqCqWxIiQQh9etsuU3ekm_v8B_xsCegqmh9F-FweEvYLKVk7BzISEVZoh-C-RQEHrenMou-2P1AqwChYpWJFNMJdctKsd5FP7qNySTojyYaMCkWVOT5jNfjUFtLUO_luUQfn83wGm_dQlb9e2E2otvg8B1uucNgqFqISiTwDVj_JOACGW2YwAVk6IM8OQkO9t9Ggn26Qtdq0hdmr88hR1g0rKkHFz5_hLaLbtsNRIwTx6zxxnAMetkYI0NPukowF7CsTlClNLsqLSZ5JngUFEZxV0JLjPfJxDlJ3qZbNX8zxdf6C8L1GSgzeidZNTi6i07tvMaOOl=w2078-h1384-no">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`]} />
    <section style={{display: 'none'}}>
        <div className="text text-start container">
          <h2>When I started</h2>
          <p>I started to code in 2006 in Saint-Petersburg. It was HTML, CSS and PHP.
            After 1.5 years I changed my occupation and came back to Frontend in 2012.</p>
        </div>
        <a href="https://webtime.studio" title="My Webworks Portfolio" target="_blank">My personal WebStudio
          page.
        </a>
    </section>
  </Layout>
)

export default IndexPage
