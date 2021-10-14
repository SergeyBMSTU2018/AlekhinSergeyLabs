using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin : Form
    {
        public Form_Admin()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FAC = new Form_Admin_Change();
            FAC.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FAS = new Form_Admin_Statistics();
            FAS.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FAI = new Form_Admin_Information();
            FAI.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }
    }
}
