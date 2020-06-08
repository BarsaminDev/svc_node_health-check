pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing##..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....with openshift develop'
                bat 'npm --version'
            }
        }
    }
}