pipeline {

    agent any

    stages {

        stage('Cypress Parallel Test Suite') {

            parallel {

                stage('Slave 1') {

                    agent {
                        label 'Agente1_1'
                    }

                    steps {
                        git url: 'https://github.com/sbravo98/CursoCypressParaleloPipline.git'

                        bat 'npm install'
                        bat 'npm update'

                        bat 'npx cypress run --record --key 91f1b105-b716-4490-bcd1-537691154f27 --parallel'
                    }
                }

                stage('Slave 2') {

                    agent {
                        label 'Agente1_2'
                    }

                    steps {
                        git url: 'https://github.com/sbravo98/CursoCypressParaleloPipline.git'

                        bat 'npm install'
                        bat 'npm update'

                        bat 'npx cypress run --record --key 91f1b105-b716-4490-bcd1-537691154f27 --parallel'
                    }
                }

                stage('Slave 5') {

                    agent {
                        label 'Agente1_5'
                    }

                    steps {
                        git url: 'https://github.com/sbravo98/CursoCypressParaleloPipline.git'

                        bat 'npm install'
                        bat 'npm update'

                        bat 'npx cypress run --record --key 91f1b105-b716-4490-bcd1-537691154f27 --parallel'
                    }
                }
            }
        }
    }
}