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

                        bat 'npx cypress run --record --key 9b1c8e7a-5c0d-4f2e-9b3c-8a1e5f6d7c8e --parallel'
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

                        bat 'npx cypress run --record --key 9b1c8e7a-5c0d-4f2e-9b3c-8a1e5f6d7c8e --parallel'
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

                        bat 'npx cypress run --record --key 9b1c8e7a-5c0d-4f2e-9b3c-8a1e5f6d7c8e --parallel'
                    }
                }
            }
        }
    }
}